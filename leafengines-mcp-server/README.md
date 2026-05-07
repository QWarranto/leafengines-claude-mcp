# LeafEngines MCP Server — Agricultural Intelligence for AI Agents

**Patent-protected soil analysis, crop recommendations, and environmental intelligence** via Model Context Protocol. 1,092+ downloads. Works with Claude Desktop, Cursor, OpenClaw, and any MCP-compatible client.

## ⚡ Get Started Now

**Free tier — no signup, no credit card:**
- **Test key:** `leaf-test-370df0a2e62e` (paste into config, works immediately)
- **Free header:** `x-free-tier: true` (no key needed at all)

**Ready for production? Founder pricing ends June 1, 2026:**
- [Starter — $10/mo → lifetime $49/mo lock →](https://buy.stripe.com/14A7sL30y8bR2F4fbgaMU02)
- [Pro — $49/mo → lifetime $149/mo lock →](https://buy.stripe.com/cNi3cv1WuajZcfE7IOaMU03)

**Get a professional soil report (no coding required):** [soilcertify.com →](https://soilcertify.com)

---

## 🌾 What It Does

LeafEngines gives AI agents real-time agricultural intelligence from USDA, EPA, and NOAA data:

- **Soil Analysis** — pH, nutrients, organic matter, drainage, recommendations for any US county
- **Crop Recommendations** — Location-specific planting advice based on soil and climate
- **Environmental Impact** — Carbon credits, sustainability scoring, compliance data
- **Water Quality** — EPA monitoring data and contamination risk assessment
- **Climate Insights** — NOAA historical records and agricultural forecasting
- **TurboQuant Check** — Hardware optimization for edge/offline deployment (always free)

## 🚀 Quick Start

### Step 1: Install

```bash
npm install -g @ancientwhispers54/leafengines-mcp-server
```

### Step 2: Configure

**For Claude Desktop** — add to `~/.config/claude-desktop/mcp.json`:

```json
{
  "mcpServers": {
    "leafengines": {
      "command": "npx",
      "args": ["@ancientwhispers54/leafengines-mcp-server"],
      "env": {
        "LEAFENGINES_API_KEY": "leaf-test-370df0a2e62e"
      }
    }
  }
}
```

**For Cursor** — add to your Cursor MCP configuration with the same API key.

### Step 3: Ask

> "What's the soil like in Fulton County, Georgia for corn planting?"

Your AI agent will use LeafEngines tools automatically to analyze soil, recommend crops, and provide environmental context.

## 🔧 Available Tools

| Tool | What It Returns | Tier |
|------|----------------|------|
| `get_soil_analysis` | USDA SSURGO soil composition, pH, NPK, drainage, recommendations | Commoditized |
| `county_lookup` | Resolve location names to FIPS codes | Commoditized |
| `territorial_water_quality` | EPA water quality and contamination risk scores | Commoditized |
| `agricultural_intelligence` | AI-powered agricultural insights and recommendations | Enhanced |
| `safe_identification` | Plant identification with toxic lookalike warnings | Enhanced |
| `carbon_credit_calculator` | Carbon credit potential using proprietary models | Proprietary |
| `generate_vrt_prescription` | Variable rate technology prescription maps | Proprietary |
| `environmental_impact_analysis` | Patent-pending Environmental Compatibility Score with satellite data fusion | Exclusive |
| `planting_optimization` | Multi-parameter phenology models for optimal planting windows | Exclusive |
| `turbo_quant_capabilities` | Hardware optimization check — **always free, no auth required** | Free |

## 💰 Pricing

### Free Tier — No Credit Card
- **Test key:** `leaf-test-370df0a2e62e` — works immediately
- **Free header:** `x-free-tier: true` — no key needed
- **Includes:** Basic soil analysis, county lookup, TurboQuant check
- [Start free →](https://soilcertify.com)

### Pay-As-You-Go

| Tier | Price | Per-Call Rate | What You Get | Buy |
|------|-------|--------------|--------------|-----|
| Commoditized | $0.50/bundle | $0.001/call | Basic soil/weather, county lookup | [Buy →](https://buy.stripe.com/3cIdR99oWajZdjI6EKaMU07) |
| Enhanced | $1.50/bundle | $0.003/call | Environmental impact, crop suitability, water quality | [Buy →](https://buy.stripe.com/7sY28reJg1NtenM8MSaMU0b) |
| Proprietary | $5.00/bundle | $0.010/call | Planting optimization, carbon credits, VRT | [Buy →](https://buy.stripe.com/3cIeVd9oW1NtgvU1kqaMU09) |
| Exclusive | $10.00/bundle | $0.020/call | Patent-pending environmental compatibility scoring | [Buy →](https://buy.stripe.com/6oU4gzbx40Jp6Vk1kqaMU0a) |

### Monthly Subscriptions

| Plan | Price | Included Calls | Best For | Subscribe |
|------|-------|---------------|----------|-----------|
| **Founder Starter** | $10/mo → lifetime $49/mo | 10,000/mo | Solo developers, prototyping | [Subscribe →](https://buy.stripe.com/14A7sL30y8bR2F4fbgaMU02) |
| **Founder Pro** | $49/mo → lifetime $149/mo | 35,000/mo | Production apps, teams | [Subscribe →](https://buy.stripe.com/cNi3cv1WuajZcfE7IOaMU03) |
| Starter | $149/mo | 10,000/mo | Solo developers, prototyping | [Subscribe →](https://buy.stripe.com/5kQ6oHcB88bR93s8MSaMU04) |
| Pro | $499/mo | 35,000/mo | Production apps, teams | [Subscribe →](https://buy.stripe.com/14A6oH7gO3VBcfE1kqaMU05) |
| Enterprise | $1,999/mo | 175,000+/mo | White-label, SLA, OEM | [Subscribe →](https://buy.stripe.com/eVqaEXfNkajZ6Vk0gmaMU06) |
| Enterprise Bundle | $3,499/mo | 685,000/mo | Large OEM, max volume | Contact: sales@leafengines.com |

> ⏰ **Founder pricing expires June 1, 2026.** First 100 customers lock lifetime rates.

### International Pricing

| Region | Starter | Pro | Local Payment Methods |
|--------|---------|-----|----------------------|
| **United States** | $49/mo | $149/mo | Card, Apple Pay, Google Pay, Affirm |
| **European Union** | €45/mo (VAT incl.) | €135/mo (VAT incl.) | Klarna, iDEAL, EPS, Apple/Google Pay |
| **United Kingdom** | £38/mo (VAT incl.) | £115/mo (VAT incl.) | Afterpay/Clearpay, Apple/Google Pay |
| **Australia** | AU$75/mo (GST incl.) | AU$225/mo (GST incl.) | Afterpay, Apple/Google Pay |

## 🔗 Integration Guides

### Claude Desktop
Add to `mcp.json` as shown in Quick Start above.

### OpenClaw
```yaml
skills:
  leafengines:
    enabled: true
    config:
      api_key: leaf-test-370df0a2e62e
      base_url: https://app.soilsidekickpro.com/api-docs
```

### Cursor
Add to your Cursor MCP configuration with the same API key.

### MCP Registry
- **Package:** `io.github.QWarranto/leafengines` version 1.1.5+
- **Registry:** [https://registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io)

## 📖 Examples

### Soil Analysis
```
User: "What's the soil like in Travis County, Texas?"
AI: [Uses get_soil_analysis] "The soil in Travis County is primarily..."
```

### Crop Planning
```
User: "Should I plant corn or soybeans on my 100-acre field in Iowa?"
AI: [Uses multiple tools] "Based on soil analysis, water quality, and climate data..."
```

### Environmental Assessment
```
User: "What's the environmental impact of this property?"
AI: [Uses environmental_impact_analysis + carbon_credit_calculator] "Environmental Compatibility Score: 78/100..."
```

## 🎯 Use Cases

### For Agronomists & Soil Scientists
- **Field analysis** — USDA SSURGO data for any US county, instantly
- **Carbon credit assessment** — Proprietary models for compliance reporting
- **Environmental impact scoring** — Patent-pending satellite data fusion
- **Get professional reports without coding:** [soilcertify.com →](https://soilcertify.com)

### For Agricultural Consultants
- **Client-ready analysis** — Soil composition, drainage, NPK recommendations
- **Crop optimization** — Multi-parameter phenology for planting windows
- **Water quality assessment** — EPA data with contamination risk scores
- **Sell reports to clients:** [soilcertify.com →](https://soilcertify.com) (172%+ profit margin at $29/mo)

### For Developers & AI Engineers
- **MCP integration** — Works with Claude, Cursor, OpenClaw, any MCP client
- **TurboQuant optimization** — 6x memory compression for edge/offline deployment
- **Multi-agent orchestration** — 10 tools across 4 pricing tiers
- **API access** — Direct HTTP calls to Supabase edge functions

## 🛡️ Enterprise-Grade Governance

- ✅ **Complete audit logging** — Every tool call tracked with attribution
- ✅ **Operations dashboard** — Real-time monitoring and anomaly detection
- ✅ **PII protection** — Automatic sanitization of sensitive data
- ✅ **Compliance ready** — SOC 2 alignment, export capabilities
- ✅ **Session correlation** — Trace multi-step agent reasoning

## 🆓 Free Tier — No Commitment

**Two ways to test, zero friction:**
1. **Test key:** `leaf-test-370df0a2e62e` — paste into config, works immediately
2. **Free header:** `x-free-tier: true` — no API key needed at all

**What's included:**
- Basic soil analysis with county FIPS codes
- USDA soil data access
- TurboQuant capabilities check (always free)
- Enough requests for evaluation and prototyping

## 🔗 Related Products

- **[LeafEngines ClawHub Skill](https://github.com/QWarranto/leafengines-clawhub-skill)** — OpenClaw agent integration
- **[n8n Nodes](https://github.com/QWarranto/n8n-nodes-leafengines)** — n8n business automation
- **[Node-RED Nodes](https://github.com/QWarranto/node-red-contrib-leafengines)** — IoT/edge automation
- **[QGIS Plugin](https://plugins.qgis.org/plugins/qgis_leafengines/)** — 500,000+ QGIS users (Plugin ID 4987)
- **[SoilCertify](https://soilcertify.com)** — Professional soil reports, no coding required

## 📞 Support

- **API Documentation:** [app.soilsidekickpro.com/api-docs](https://app.soilsidekickpro.com/api-docs)
- **MCP Documentation:** [app.soilsidekickpro.com/mcp](https://app.soilsidekickpro.com/mcp)
- **GitHub Issues:** [github.com/QWarranto/leafengines-claude-mcp/issues](https://github.com/QWarranto/leafengines-claude-mcp/issues)
- **Email:** support@soilsidekickpro.com
- **Partnerships:** partnerships@leafengines.com

## 📄 License

MIT License — integration code is open source. API service has commercial terms with free tier available. Core algorithms are patent-protected (U.S. #19/320,727, #19/544,827).

---

🌱 **LeafEngines™** | SoilSidekick Pro® | SoilCertify | SoilTech Suite, Inc.
*Space gives the picture. We give the truth.*
