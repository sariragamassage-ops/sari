"""
Backend API Testing for Sari Raga Massage
Tests all endpoints and verifies exact pricing data
"""
import requests
import sys

BASE_URL = "https://massage-24jam.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.tests_run = 0
        self.tests_passed = 0
        self.issues = []

    def test(self, name, func):
        """Run a single test"""
        self.tests_run += 1
        print(f"\n🔍 Testing: {name}")
        try:
            func()
            self.tests_passed += 1
            print(f"✅ PASSED")
            return True
        except AssertionError as e:
            print(f"❌ FAILED: {e}")
            self.issues.append(f"{name}: {e}")
            return False
        except Exception as e:
            print(f"❌ ERROR: {e}")
            self.issues.append(f"{name}: {e}")
            return False

    def get(self, endpoint):
        """Make GET request"""
        url = f"{BASE_URL}{endpoint}"
        print(f"   GET {url}")
        response = requests.get(url, timeout=10)
        print(f"   Status: {response.status_code}")
        return response

    def test_bootstrap(self):
        """Test /api/bootstrap returns all required data"""
        def run():
            resp = self.get("/bootstrap")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            
            # Check all required keys
            required = ["settings", "hero_slides", "services", "addons", "gallery", 
                       "testimonials", "faqs", "steps", "badges", "stats", "articles"]
            for key in required:
                assert key in data, f"Missing key: {key}"
            
            # Check counts
            assert len(data["hero_slides"]) == 5, f"Expected 5 hero_slides, got {len(data['hero_slides'])}"
            assert len(data["services"]) == 3, f"Expected 3 services, got {len(data['services'])}"
            assert len(data["addons"]) == 1, f"Expected 1 addon, got {len(data['addons'])}"
            assert len(data["gallery"]) == 10, f"Expected 10 gallery items, got {len(data['gallery'])}"
            assert len(data["testimonials"]) == 6, f"Expected 6 testimonials, got {len(data['testimonials'])}"
            assert len(data["faqs"]) == 10, f"Expected 10 faqs, got {len(data['faqs'])}"
            assert len(data["steps"]) == 4, f"Expected 4 steps, got {len(data['steps'])}"
            assert len(data["badges"]) == 6, f"Expected 6 badges, got {len(data['badges'])}"
            assert len(data["stats"]) == 4, f"Expected 4 stats, got {len(data['stats'])}"
            assert len(data["articles"]) == 6, f"Expected 6 articles, got {len(data['articles'])}"
            
            print(f"   ✓ All collections present with correct counts")
        self.test("GET /api/bootstrap", run)

    def test_settings(self):
        """Test /api/settings"""
        def run():
            resp = self.get("/settings")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert data["brand_name"] == "Sari Raga Massage", "Brand name mismatch"
            assert data["whatsapp_number"] == "6285780247525", "WhatsApp number mismatch"
            print(f"   ✓ Settings correct")
        self.test("GET /api/settings", run)

    def test_services(self):
        """Test /api/services"""
        def run():
            resp = self.get("/services")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert len(data) == 3, f"Expected 3 services, got {len(data)}"
            print(f"   ✓ Services endpoint working")
        self.test("GET /api/services", run)

    def test_addons(self):
        """Test /api/addons"""
        def run():
            resp = self.get("/addons")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert len(data) == 1, f"Expected 1 addon, got {len(data)}"
            print(f"   ✓ Addons endpoint working")
        self.test("GET /api/addons", run)

    def test_gallery(self):
        """Test /api/gallery"""
        def run():
            resp = self.get("/gallery")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert len(data) == 10, f"Expected 10 gallery items, got {len(data)}"
            print(f"   ✓ Gallery endpoint working")
        self.test("GET /api/gallery", run)

    def test_testimonials(self):
        """Test /api/testimonials"""
        def run():
            resp = self.get("/testimonials")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert len(data) == 6, f"Expected 6 testimonials, got {len(data)}"
            print(f"   ✓ Testimonials endpoint working")
        self.test("GET /api/testimonials", run)

    def test_faqs(self):
        """Test /api/faqs"""
        def run():
            resp = self.get("/faqs")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert len(data) == 10, f"Expected 10 FAQs, got {len(data)}"
            print(f"   ✓ FAQs endpoint working")
        self.test("GET /api/faqs", run)

    def test_articles(self):
        """Test /api/articles"""
        def run():
            resp = self.get("/articles")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert len(data) == 6, f"Expected 6 articles, got {len(data)}"
            # Articles should not have content field
            for article in data:
                assert "content" not in article, "Articles list should not include content field"
            print(f"   ✓ Articles endpoint working (content excluded)")
        self.test("GET /api/articles", run)

    def test_article_detail_valid(self):
        """Test /api/articles/{slug} with valid slug"""
        def run():
            resp = self.get("/articles/tanda-badan-butuh-dipijat")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            assert "article" in data, "Missing 'article' key"
            assert "related" in data, "Missing 'related' key"
            assert "content" in data["article"], "Article should include content"
            assert isinstance(data["related"], list), "Related should be a list"
            print(f"   ✓ Article detail with related articles")
        self.test("GET /api/articles/{valid-slug}", run)

    def test_article_detail_invalid(self):
        """Test /api/articles/{slug} with invalid slug returns 404"""
        def run():
            resp = self.get("/articles/tidak-ada-artikel-ini")
            assert resp.status_code == 404, f"Expected 404, got {resp.status_code}"
            data = resp.json()
            assert "detail" in data, "Missing error detail"
            assert "tidak ditemukan" in data["detail"].lower(), "Error message should be in Indonesian"
            print(f"   ✓ 404 with Indonesian error message: {data['detail']}")
        self.test("GET /api/articles/{invalid-slug} returns 404", run)

    def test_exact_prices(self):
        """Test EXACT prices match requirements"""
        def run():
            resp = self.get("/bootstrap")
            assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
            data = resp.json()
            
            services = {s["slug"]: s for s in data["services"]}
            
            # Body Massage
            body = services.get("body-massage")
            assert body is not None, "Body Massage service not found"
            assert len(body["tiers"]) == 2, f"Body Massage should have 2 tiers, got {len(body['tiers'])}"
            assert body["tiers"][0]["duration"] == "90 menit", f"First tier duration mismatch"
            assert body["tiers"][0]["price"] == 300000, f"Body Massage 90m: expected 300000, got {body['tiers'][0]['price']}"
            assert body["tiers"][1]["duration"] == "120 menit", f"Second tier duration mismatch"
            assert body["tiers"][1]["price"] == 400000, f"Body Massage 120m: expected 400000, got {body['tiers'][1]['price']}"
            print(f"   ✓ Body Massage: 90m=Rp 300,000 / 120m=Rp 400,000")
            
            # Massage Totok Wajah
            totok = services.get("massage-totok-wajah")
            assert totok is not None, "Massage Totok Wajah service not found"
            assert len(totok["tiers"]) == 2, f"Totok Wajah should have 2 tiers, got {len(totok['tiers'])}"
            assert totok["tiers"][0]["price"] == 350000, f"Totok Wajah 90m: expected 350000, got {totok['tiers'][0]['price']}"
            assert totok["tiers"][1]["price"] == 400000, f"Totok Wajah 120m: expected 400000, got {totok['tiers'][1]['price']}"
            print(f"   ✓ Massage Totok Wajah: 90m=Rp 350,000 / 120m=Rp 400,000")
            
            # Scrub/Lulur
            scrub = services.get("scrub-lulur")
            assert scrub is not None, "Scrub/Lulur service not found"
            assert len(scrub["tiers"]) == 2, f"Scrub/Lulur should have 2 tiers, got {len(scrub['tiers'])}"
            assert scrub["tiers"][0]["price"] == 400000, f"Scrub/Lulur 90m: expected 400000, got {scrub['tiers'][0]['price']}"
            assert scrub["tiers"][1]["price"] == 500000, f"Scrub/Lulur 120m: expected 500000, got {scrub['tiers'][1]['price']}"
            print(f"   ✓ Scrub/Lulur: 90m=Rp 400,000 / 120m=Rp 500,000")
            
            # Kerokan addon
            addons = data["addons"]
            assert len(addons) == 1, f"Expected 1 addon, got {len(addons)}"
            kerokan = addons[0]
            assert kerokan["id"] == "kerokan", f"Addon should be kerokan, got {kerokan['id']}"
            assert kerokan["price"] == 150000, f"Kerokan: expected 150000, got {kerokan['price']}"
            print(f"   ✓ Kerokan addon: Rp 150,000")
            
        self.test("EXACT PRICES verification", run)

    def run_all(self):
        """Run all tests"""
        print("=" * 60)
        print("BACKEND API TESTING - Sari Raga Massage")
        print("=" * 60)
        
        self.test_bootstrap()
        self.test_settings()
        self.test_services()
        self.test_addons()
        self.test_gallery()
        self.test_testimonials()
        self.test_faqs()
        self.test_articles()
        self.test_article_detail_valid()
        self.test_article_detail_invalid()
        self.test_exact_prices()
        
        print("\n" + "=" * 60)
        print(f"RESULTS: {self.tests_passed}/{self.tests_run} tests passed")
        print("=" * 60)
        
        if self.issues:
            print("\n❌ ISSUES FOUND:")
            for issue in self.issues:
                print(f"  • {issue}")
        else:
            print("\n✅ ALL BACKEND TESTS PASSED!")
        
        return 0 if self.tests_passed == self.tests_run else 1

if __name__ == "__main__":
    tester = BackendTester()
    sys.exit(tester.run_all())
