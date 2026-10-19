from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Any, Dict
import uuid
from datetime import datetime, timezone
from contextlib import asynccontextmanager

import content_seed as seed

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
)
logger = logging.getLogger(__name__)


SEED_MAP = {
    "settings": [seed.SITE_SETTINGS],
    "hero_slides": seed.HERO_SLIDES,
    "services": seed.SERVICES,
    "addons": seed.ADDONS,
    "gallery": seed.GALLERY,
    "testimonials": seed.TESTIMONIALS,
    "faqs": seed.FAQS,
    "articles": seed.ARTICLES,
    "steps": seed.STEPS,
    "badges": seed.BADGES,
    "stats": seed.STATS,
}


async def seed_content() -> None:
    """Idempotent upsert of all site content."""
    for collection, docs in SEED_MAP.items():
        for doc in docs:
            payload = dict(doc)
            payload["updated_at"] = datetime.now(timezone.utc).isoformat()
            await db[collection].update_one(
                {"id": payload["id"]}, {"$set": payload}, upsert=True
            )
    logger.info("Content seed completed for collections: %s", list(SEED_MAP.keys()))


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        await seed_content()
    except Exception as exc:  # pragma: no cover
        logger.exception("Seeding failed: %s", exc)
    yield
    client.close()


app = FastAPI(title="Sari Raga Massage API", lifespan=lifespan)
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


async def fetch(collection: str, sort_field: str = "order") -> List[Dict[str, Any]]:
    cursor = db[collection].find({}, {"_id": 0}).sort(sort_field, 1)
    return await cursor.to_list(length=500)


@api_router.get("/")
async def root():
    return {"message": "Sari Raga Massage API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy"}


@api_router.get("/settings")
async def get_settings():
    doc = await db["settings"].find_one({"id": "site"}, {"_id": 0})
    if not doc:
        return seed.SITE_SETTINGS
    return doc


@api_router.get("/hero-slides")
async def get_hero_slides():
    return await fetch("hero_slides")


@api_router.get("/services")
async def get_services():
    return await fetch("services")


@api_router.get("/addons")
async def get_addons():
    return await fetch("addons")


@api_router.get("/gallery")
async def get_gallery():
    return await fetch("gallery")


@api_router.get("/testimonials")
async def get_testimonials():
    return await fetch("testimonials")


@api_router.get("/faqs")
async def get_faqs():
    return await fetch("faqs")


@api_router.get("/steps")
async def get_steps():
    return await fetch("steps")


@api_router.get("/badges")
async def get_badges():
    return await fetch("badges")


@api_router.get("/stats")
async def get_stats():
    return await fetch("stats")


@api_router.get("/articles")
async def get_articles():
    docs = await fetch("articles")
    return [{k: v for k, v in d.items() if k != "content"} for d in docs]


@api_router.get("/articles/{slug}")
async def get_article(slug: str):
    doc = await db["articles"].find_one({"slug": slug}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Artikel tidak ditemukan")
    related = await db["articles"].find(
        {"slug": {"$ne": slug}}, {"_id": 0, "content": 0}
    ).sort("order", 1).to_list(length=3)
    return {"article": doc, "related": related}


@api_router.get("/bootstrap")
async def bootstrap():
    """Single call returning everything the landing page needs."""
    settings = await get_settings()
    return {
        "settings": settings,
        "hero_slides": await fetch("hero_slides"),
        "services": await fetch("services"),
        "addons": await fetch("addons"),
        "gallery": await fetch("gallery"),
        "testimonials": await fetch("testimonials"),
        "faqs": await fetch("faqs"),
        "steps": await fetch("steps"),
        "badges": await fetch("badges"),
        "stats": await fetch("stats"),
        "articles": [
            {k: v for k, v in d.items() if k != "content"} for d in await fetch("articles")
        ],
    }


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(client_name=input.client_name)
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    checks = await db.status_checks.find({}, {"_id": 0}).to_list(100)
    return [StatusCheck(**c) for c in checks]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
