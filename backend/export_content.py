"""Export seluruh konten website ke JSON statis untuk frontend.

Sumber kebenaran konten tetap satu: `backend/content_seed.py`.
Script ini menuliskannya ke `frontend/src/data/content.json` sehingga website
dapat tayang sebagai situs statis (misalnya di Vercel) tanpa perlu database.

Cara pakai:
    cd backend && python export_content.py
"""

import json
from pathlib import Path

import content_seed as seed

OUTPUT = Path(__file__).resolve().parent.parent / "frontend" / "src" / "data" / "content.json"


def build_payload() -> dict:
    """Bentuknya sengaja dibuat identik dengan response GET /api/bootstrap."""
    return {
        "settings": seed.SITE_SETTINGS,
        "hero_slides": seed.HERO_SLIDES,
        "services": seed.SERVICES,
        "addons": seed.ADDONS,
        "gallery": seed.GALLERY,
        "testimonials": seed.TESTIMONIALS,
        "faqs": seed.FAQS,
        "steps": seed.STEPS,
        "badges": seed.BADGES,
        "stats": seed.STATS,
        "articles": seed.ARTICLES,
    }


def main() -> None:
    payload = build_payload()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    counts = {k: (1 if isinstance(v, dict) else len(v)) for k, v in payload.items()}
    print(f"Konten berhasil diekspor ke: {OUTPUT}")
    for key, value in counts.items():
        print(f"  - {key}: {value}")


if __name__ == "__main__":
    main()
