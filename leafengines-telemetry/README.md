# LeafEngines Unified Telemetry System

## ⚡ Get Started Now

**Free tier — no signup, no credit card:**
- **Test key:** `leaf-test-370df0a2e62e` (works immediately)
- **Free header:** `x-free-tier: true` (no key needed)

**Ready for production? Founder pricing ends June 1, 2026:**
- [Starter — $10/mo → lifetime $49/mo lock →](https://buy.stripe.com/14A7sL30y8bR2F4fbgaMU02)
- [Pro — $49/mo → lifetime $149/mo lock →](https://buy.stripe.com/cNi3cv1WuajZcfE7IOaMU03)

**Get a professional soil report (no coding required):** [soilcertify.com →](https://soilcertify.com)

---

## 🎯 Purpose
Collect anonymous usage data across all platforms to:
1. Deliver promised "Usage Insights Dashboard"
2. Enable 70% faster troubleshooting
3. Optimize performance based on real data
4. Understand user behavior across platforms

## 📊 Platforms Supported
1. **MCP Server** (1,092+ users)
2. **n8n Nodes** (476+ users)
3. **Node-RED** (124+ users)
4. **QGIS Plugin** (60+ users)
5. **Clawhub Skill** (83+ users)

## 🔒 Privacy-First Design
- **No PII collected** (personally identifiable information)
- **Hashed identifiers** only
- **GDPR/CCPA compliant**
- **Data anonymization** at collection
- **Optional country** from IP (privacy-safe)

## 🚀 API Endpoints

### POST `/v1/usage`
Track feature usage across platforms.

```json
{
  "platform": "node-red",
  "version": "1.0.2",
  "feature": "soil_analysis",
  "success": true,
  "response_time_ms": 150,
  "anonymous_id": "hashed_abc123",
  "timestamp": "2026-04-21T03:09:00Z",
  "country": "US"
}
```

### POST `/v1/errors`
Report errors for faster troubleshooting.

```json
{
  "platform": "n8n",
  "version": "1.0.0",
  "error_type": "api_timeout",
  "error_message": "Request timeout after 30s",
  "feature": "crop_recommendation",
  "anonymous_id": "hashed_abc123",
  "timestamp": "2026-04-21T03:09:00Z"
}
```

### POST `/v1/business`
Track business events (conversions, etc.).

```json
{
  "event_type": "founder_purchase",
  "platform": "mcp",
  "plan": "starter",
  "anonymous_id": "hashed_abc123",
  "timestamp": "2026-04-21T03:09:00Z"
}
```

### GET `/v1/health`
Service health check.

## 🗄️ Database Schema
```sql
CREATE TABLE usage_events (
  id SERIAL PRIMARY KEY,
  platform VARCHAR(20),
  version VARCHAR(20),
  feature VARCHAR(50),
  success BOOLEAN,
  response_time_ms INTEGER,
  anonymous_id VARCHAR(64),
  country VARCHAR(2),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE error_events (
  id SERIAL PRIMARY KEY,
  platform VARCHAR(20),
  version VARCHAR(20),
  error_type VARCHAR(50),
  error_message TEXT,
  feature VARCHAR(50),
  anonymous_id VARCHAR(64),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE business_events (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(50),
  platform VARCHAR(20),
  plan VARCHAR(20),
  anonymous_id VARCHAR(64),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔧 Integration Guide

### Node-RED Integration
```javascript
// In node-red-contrib-leafengines nodes
const telemetryEndpoint = "https://telemetry.leafengines.com/v1/usage";

function trackUsage(feature, success, responseTime) {
  const data = {
    platform: "node-red",
    version: "1.0.3",
    feature: feature,
    success: success,
    response_time_ms: responseTime,
    anonymous_id: hashFunction(userContext),
    timestamp: new Date().toISOString()
  };
  
  fetch(telemetryEndpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).catch(() => {}); // Fail silently
}
```

### n8n Integration
Similar pattern in n8n node execution.

### MCP Server Integration
Already has logging, add central reporting.

## 📈 Dashboard Features
1. **Usage Overview** - Total requests, success rate, avg response time
2. **Platform Comparison** - Usage across MCP, n8n, Node-RED, etc.
3. **Error Analysis** - Most common errors, troubleshooting guides
4. **Performance Trends** - Response time improvements over time
5. **Feature Popularity** - Which features are used most

## 🚀 Deployment
- **Service:** Render (Free tier)
- **Database:** PostgreSQL (Render PostgreSQL)
- **Authentication:** API key for write access
- **Dashboard:** Simple Flask/FastAPI + Chart.js

## 📋 Next Steps
1. Deploy telemetry service to Render
2. Update Node-RED to v1.0.3 with telemetry
3. Update n8n nodes with telemetry
4. Update MCP server to report centrally
5. Build Usage Insights Dashboard
6. Add Clawhub and QGIS telemetry

## 💰 Pricing

### Free Tier — No Credit Card
- **Test key:** `leaf-test-370df0a2e62e`
- **Free header:** `x-free-tier: true`
- **Includes:** Basic soil analysis, county lookup, TurboQuant check
- **Try it:** [soilcertify.com →](https://soilcertify.com)

### Pay-As-You-Go

| Tier | Price | Per-Call Rate | What You Get | Buy |
|------|-------|--------------|--------------|-----|
| Commoditized | $0.50/bundle | $0.001/call | Basic soil/weather, county lookup | [Buy →](https://buy.stripe.com/3cIdR99oWajZdjI6EKaMU07) |
| Enhanced | $1.50/bundle | $0.003/call | Environmental impact, crop suitability | [Buy →](https://buy.stripe.com/7sY28reJg1NtenM8MSaMU0b) |
| Proprietary | $5.00/bundle | $0.010/call | Planting optimization, carbon credits | [Buy →](https://buy.stripe.com/3cIeVd9oW1NtgvU1kqaMU09) |
| Exclusive | $10.00/bundle | $0.020/call | Patent-pending env compatibility scoring | [Buy →](https://buy.stripe.com/6oU4gzbx40Jp6Vk1kqaMU0a) |

### Monthly Subscriptions

| Plan | Price | Included Calls | Best For | Subscribe |
|------|-------|---------------|----------|-----------|
| **Founder Starter** | $10/mo → lifetime $49/mo | 10,000/mo | Solo developers | [Subscribe →](https://buy.stripe.com/14A7sL30y8bR2F4fbgaMU02) |
| **Founder Pro** | $49/mo → lifetime $149/mo | 35,000/mo | Production apps | [Subscribe →](https://buy.stripe.com/cNi3cv1WuajZcfE7IOaMU03) |
| Starter | $149/mo | 10,000/mo | Solo developers | [Subscribe →](https://buy.stripe.com/5kQ6oHcB88bR93s8MSaMU04) |
| Pro | $499/mo | 35,000/mo | Production apps, teams | [Subscribe →](https://buy.stripe.com/14A6oH7gO3VBcfE1kqaMU05) |
| Enterprise | $1,999/mo | 175,000+/mo | White-label, SLA, OEM | [Subscribe →](https://buy.stripe.com/eVqaEXfNkajZ6Vk0gmaMU06) |

> ⏰ **Founder pricing expires June 1, 2026.** First 100 customers lock lifetime rates.

---

🌱 **LeafEngines™** | SoilSidekick Pro® | SoilCertify | SoilTech Suite, Inc.
*Space gives the picture. We give the truth.*
