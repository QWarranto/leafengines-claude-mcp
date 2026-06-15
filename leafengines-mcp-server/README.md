# LeafEngines MCP Server — Agricultural Intelligence for AI Agents

**Patent-protected soil analysis, crop recommendations, and environmental intelligence** via Model Context Protocol. 1,092+ downloads. Works with Claude Desktop, Cursor, OpenClaw, and any MCP-compatible client.

## ⚡ Get Started Now

**Free tier — no signup, no credit card:**
- **Test key:** `leaf-test-370df0a2e62e` (paste into config, works immediately)
- **Free header:** `x-free-tier: true` (no key needed at all)

**Ready for production?**
- [Starter — $149/mo →](https://buy.stripe.com/5kQ6oHcB88bR93s8MSaMU04)
- [Pro — $499/mo →](https://buy.stripe.com/14A6oH7gO3VBcfE1kqaMU05)

**Partner Program:** Stop building for free. Use our API to sell $100–200 soil reports to local farmers, drone pilots, and GIS communities. You buy each report for $25. [Join our Partner Program →](https://soilcertify.com)

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
- **Includes:** 3 AI calls/day + 50 data lookups/day. County lookup, water quality, TurboQuant check always free.
- [Start free →](https://soilcertify.com)

### Credit Packs — Pay As You Go

| Pack | Price | Credits | Per-Call Rate | Best For | Buy |
|------|-------|---------|---------------|----------|-----|
| Starter | $10.00 | 1,000 | $0.01/call | Low-volume Telegram users, hobby developers | [Buy →](https://buy.stripe.com/3cIdR99oWajZdjI6EKaMU07) |
| Pro | $25.00 | 5,000 | $0.005/call | Regular users, n8n/Node-RED integrations | [Buy →](https://buy.stripe.com/7sY28reJg1NtenM8MSaMU0b) |
| Enterprise | $50.00 | 25,000 | $0.002/call | High-volume users, MCP/Clawhub clients | [Buy →](https://buy.stripe.com/3cIeVd9oW1NtgvU1kqaMU09) |

> One-time purchase. Credits never expire. All endpoints unlocked. Data lookups always free.

### Monthly Volume Subscriptions

| Plan | Price | What You Get | Best For | Subscribe |
|------|-------|--------------|----------|-----------|
| Starter | $149/mo | Unlimited AI calls + email support | Small teams, production n8n workflows | [Subscribe →](https://buy.stripe.com/5kQ6oHcB88bR93s8MSaMU04) |
| Pro | $499/mo | Higher throughput + priority support | Growing integrations, MCP servers | [Subscribe →](https://buy.stripe.com/14A6oH7gO3VBcfE1kqaMU05) |
| Enterprise | $1,999/mo | Unlimited volume + custom SLAs + white-label | OEM partners, enterprise deployments | [Subscribe →](https://buy.stripe.com/eVqaEXfNkajZ6Vk0gmaMU06) |


### International Pricing

|| Region | Starter | Pro | Local Payment Methods |
||--------|---------|-----|----------------------|
|| **United States** | $149/mo | $499/mo | Card, Apple Pay, Google Pay, Affirm |
|| **European Union** | €135/mo (VAT incl.) | €450/mo (VAT incl.) | Klarna, iDEAL, EPS, Apple/Google Pay |
|| **United Kingdom** | £115/mo (VAT incl.) | £385/mo (VAT incl.) | Afterpay/Clearpay, Apple/Google Pay |
|| **Australia** | AU$225/mo (GST incl.) | AU$750/mo (GST incl.) | Afterpay, Apple/Google Pay |

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
- **Partner Program:** [Sell soil reports to your clients →](https://soilcertify.com)

### For Agricultural Consultants
- **Client-ready analysis** — Soil composition, drainage, NPK recommendations
- **Crop optimization** — Multi-parameter phenology for planting windows
- **Water quality assessment** — EPA data with contamination risk scores
- **Sell reports to clients:** [Join Partner Program →](https://soilcertify.com) (4× markup on $25 wholesale)

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
