# LeafEngines Skill Usage Logger

> 🏆 **Global Startup Awards 2026 — North America Regional Nominee**

## ⚡ Get Started Now

**Free tier — no signup, no credit card:**
- **Test key:** `leaf-test-370df0a2e62e` (works immediately)
- **Free header:** `x-free-tier: true` (no key needed)

**Ready for production?**
- [Starter — $149/mo →](https://buy.stripe.com/5kQ6oHcB88bR93s8MSaMU04)
- [Pro — $499/mo →](https://buy.stripe.com/14A6oH7gO3VBcfE1kqaMU05)

**Partner Program:** Stop building for free. Use our API to sell $100–200 soil reports to local farmers, drone pilots, and GIS communities. You buy each report for $25. [Join our Partner Program →](https://soilcertify.com)

---

Simple Flask endpoint to track anonymous usage of LeafEngines Claude skills.

## Quick Start

### Local Development:
```bash
# Install dependencies
pip install -r requirements.txt

# Set environment variables
export LEAFENGINES_STATS_KEY="your-secret-key-here"
export PORT=5001

# Run the server
python usage_endpoint.py
```

### Deploy to Render:
1. Push this directory to GitHub
2. Create new Web Service on Render
3. Connect your repository
4. Set environment variables:
   - `LEAFENGINES_STATS_KEY`: Your secret API key
5. Deploy!

## Environment Variables

- `LEAFENGINES_STATS_KEY`: Secret key for accessing stats/logs endpoints
- `LEAFENGINES_DB_PATH`: Path to SQLite database (default: usage_logs.db)
- `PORT`: Server port (default: 5001)

## API Endpoints

### `POST /leafengines/usage`
Receive usage pings from skills.

**Payload:**
```json
{
  "timestamp": "2026-04-15T18:30:00Z",
  "session_id": "random_session_string",
  "skill_version": "1.0.0",
  "analysis_type": "soil"
}
```

**Response:** Always 200 (silent failure on errors)

### `GET /leafengines/usage/stats?key=YOUR_KEY`
Get usage statistics.

**Response:**
```json
{
  "total_runs": 150,
  "unique_sessions": 45,
  "last_7_days": 32,
  "last_30_days": 120,
  "analysis_types": [
    {"analysis_type": "soil", "count": 100},
    {"analysis_type": "crop", "count": 50}
  ],
  "daily_series": [
    {"day": "2026-04-15", "count": 10},
    {"day": "2026-04-14", "count": 8}
  ]
}
```

### `GET /leafengines/usage/logs?key=YOUR_KEY&page=1&limit=50`
Get paginated raw log entries.

### `GET /leafengines/usage/health`
Health check endpoint.

## Client Integration

In your LeafEngines skill (`soil_analysis.py`):

```python
import os
import requests
import uuid
from datetime import datetime

def _log_usage(analysis_type="soil"):
    """Log anonymous usage to tracking endpoint"""
    try:
        endpoint = os.environ.get('LEAFENGINES_LOG_ENDPOINT')
        if not endpoint:
            return
            
        payload = {
            "timestamp": datetime.utcnow().isoformat() + 'Z',
            "session_id": str(uuid.uuid4()),
            "skill_version": "1.0.0",
            "analysis_type": analysis_type
        }
        
        requests.post(
            endpoint,
            json=payload,
            timeout=2  # Don't block on failure
        )
    except:
        pass  # Silent failure - never break the skill
```

## Database Schema

```sql
CREATE TABLE usage_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    session_hash TEXT NOT NULL,
    skill_version TEXT,
    analysis_type TEXT,
    user_agent TEXT,
    ip_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 💰 Pricing

### Free Tier — No Credit Card
- **Test key:** `leaf-test-370df0a2e62e`
- **Free header:** `x-free-tier: true`
- **Includes:** Basic soil analysis, county lookup, TurboQuant check
- **Try it:** [soilcertify.com →](https://soilcertify.com)

### Credit Packs — Pay As You Go

| Pack | Price | Credits | Per-Call Rate | Best For | Buy |
|------|-------|---------|---------------|----------|-----|
| Starter | $10.00 | 1,000 | $0.01/call | Low-volume users, hobby developers | [Buy →](https://buy.stripe.com/3cIdR99oWajZdjI6EKaMU07) |
| Pro | $25.00 | 5,000 | $0.005/call | Regular users, integrations | [Buy →](https://buy.stripe.com/7sY28reJg1NtenM8MSaMU0b) |
| Enterprise | $50.00 | 25,000 | $0.002/call | High-volume users, MCP/Clawhub clients | [Buy →](https://buy.stripe.com/3cIeVd9oW1NtgvU1kqaMU09) |

### Monthly Subscriptions

| Plan | Price | Included Calls | Best For | Subscribe |
|------|-------|---------------|----------|-----------|
| Starter | $149/mo | 10,000/mo | Solo developers | [Subscribe →](https://buy.stripe.com/5kQ6oHcB88bR93s8MSaMU04) |
| Pro | $499/mo | 35,000/mo | Production apps, teams | [Subscribe →](https://buy.stripe.com/14A6oH7gO3VBcfE1kqaMU05) |
| Enterprise | $1,999/mo | 175,000+/mo | White-label, SLA, OEM | [Subscribe →](https://buy.stripe.com/eVqaEXfNkajZ6Vk0gmaMU06) |



---

🌱 **LeafEngines™** | SoilSidekick Pro® | SoilCertify | SoilTech Suite, Inc.
*Space gives the picture. We give the truth.*