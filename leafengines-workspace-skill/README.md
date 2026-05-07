# LeafEngines Workspace Skill

Pre-configured OpenClaw workspace for agricultural intelligence and environmental monitoring.

## What This Skill Does

Transforms your OpenClaw workspace into an agricultural intelligence hub with:

- **Pre-configured AGENTS.md** with LeafEngines workflows and cron patterns
- **Custom TOOLS.md** with API configuration and agricultural settings  
- **Project templates** for soil analysis, crop planning, environmental assessments
- **Automated monitoring** via cron jobs for soil health, weather, markets
- **Cost tracking** and budget management for API usage
- **Memory structure** optimized for agricultural projects

## Installation

### From Clawhub (Recommended)
```bash
openclaw skills install clawhub:leafengines-workspace
```

### Manual Installation
```bash
# Clone or copy to your workspace

## 🎯 QGIS Plugin Officially Approved!

**Plugin ID:** 4987 (LeafEngines Agricultural Intelligence)  
**Version:** 1.0.2 Experimental  
**Status:** ✅ **PUBLICLY AVAILABLE**  
**Download:** https://plugins.qgis.org/plugins/qgis_leafengines/version/1.0.2/download/

### Key Features:
- **USDA soil data** - Soil composition, pH, N/P/K recommendations
- **EPA water quality** - Water quality metrics and analysis
- **Satellite vegetation indices** - NDVI, water-stress overlays from NASA MODIS
- **AI-powered crop recommendations** - Tailored to exact field polygons
- **Carbon credit calculations** - Environmental impact scoring
- **Offline-first architecture** - Works in remote/"deep canopy" areas

### Strategic Advantages for Partners:
1. **Pre-vetted, low-risk integration** - Officially approved by QGIS after rigorous review
2. **Seamless future-proofing** - Aligns with QGIS release cycles (QGIS 4.0.0+ ready)
3. **Instant credibility** - Discoverable by 500,000+ QGIS users in agriculture sector
4. **Regulatory advantage** - Preferred for government/EPA/USDA-related procurements
5. **Ecosystem power** - Integrates with thousands of complementary QGIS plugins

### For OEM Partners:
Embed LeafEngines agricultural intelligence directly into your hardware or software platforms with confidence. The official QGIS approval eliminates weeks of custom validation, security audits, and compatibility testing.

*Approved: April 14, 2026*

cd /Users/reginaldrice/.openclaw/workspace
cp -r leafengines-workspace-skill/* .

# Run installer
chmod +x scripts/install.sh
./scripts/install.sh
```

## Configuration

### 1. Set Your API Key
Edit `TOOLS.md` and replace:
```markdown
- **API Key:** `ak_your_key_here`
```
With your actual LeafEngines API key from https://soilsidekick.com/api-keys

### 2. Configure Your Location
Update `TOOLS.md` with your:
- County and state
- Farm size and crop types
- Soil characteristics
- USDA growing zone

### 3. Set Up Monitoring
Review and enable cron jobs in `AGENTS.md`:
- Daily soil health checks
- Weekly planting alerts
- Market price monitoring
- Environmental compliance tracking

## Features

### 🛠️ Integrated Tool Reference
All 9 LeafEngines tools with:
- Tier pricing and cost per call
- Use cases and example queries
- Workflow templates
- Integration examples

### ⏰ Automated Monitoring
Pre-configured cron jobs for:
- **Daily:** API health, weather alerts
- **Weekly:** Planting windows, market prices
- **Monthly:** Carbon tracking, budget reviews
- **Seasonal:** Crop planning, harvest preparation

### 📁 Project Management
Templates for:
- Soil analysis projects
- Environmental assessments
- Crop planning sessions
- Compliance documentation

### 💰 Cost Control
- Usage tracking and logging
- Budget alerts and thresholds
- Cost-saving strategies
- Monthly plan optimization

### 🔄 Workflow Automation
Step-by-step workflows for:
1. Complete soil analysis
2. Environmental compliance checks
3. Crop planning and optimization
4. Carbon credit calculations
5. Precision agriculture mapping

## Quick Start Guide

### Day 1: Setup
1. Install skill and configure API key
2. Update location settings in TOOLS.md
3. Test connection with sample query
4. Set up first cron job (health check)

### Week 1: Initial Projects
1. Run complete soil analysis for your land
2. Set up weather and market monitoring
3. Create planting schedule for current season
4. Establish baseline environmental metrics

### Month 1: Optimization
1. Review API usage and adjust budget
2. Refine cron jobs based on actual needs
3. Document successful workflows
4. Plan next season's crops

## Use Cases

### For Farmers & Ranchers
- Soil health monitoring and improvement
- Crop rotation planning and optimization
- Input cost reduction through precision agriculture
- Environmental compliance and reporting
- Market price tracking and sales timing

### For Agricultural Consultants
- Client soil analysis and recommendations
- Environmental impact assessments
- Carbon credit calculations for sustainability programs
- Precision agriculture mapping services
- Regulatory compliance documentation

### For Environmental Researchers
- Watershed health monitoring
- Biodiversity impact assessments
- Climate change adaptation planning
- Sustainable agriculture research
- Policy impact analysis

### For Land Managers
- Property valuation through environmental scoring
- Conservation planning and funding applications
- Recreational land management
- Timber and forestry planning
- Water resource management

## Tool Integration

### LeafEngines Tools (9 total)
- `environmental_impact_analysis` - EXCLUSIVE tier
- `planting_optimization` - EXCLUSIVE tier  
- `carbon_credit_calculator` - Proprietary tier
- `generate_vrt_prescription` - Proprietary tier
- `agricultural_intelligence` - Enhanced tier
- `safe_identification` - Enhanced tier
- `get_soil_data` - Commoditized tier
- `county_lookup` - Commoditized tier
- `territorial_water_quality` - Commoditized tier

### External Data Sources
- Weather data (National Weather Service)
- Market prices (USDA, commodity exchanges)
- Sensor data (soil moisture, weather stations)
- Regulatory databases (EPA, USDA)

## Cost Management

### Pricing Tiers
| Tier | Cost/Call | Best For |
|------|-----------|----------|
| Commoditized | $0.001 | Basic soil/water data |
| Enhanced | $0.003 | AI insights, plant ID |
| Proprietary | $0.01 | Carbon credits, VRT maps |
| EXCLUSIVE | $0.02 | Environmental scoring, planting optimization |

### Monthly Plans
- **Starter:** $149/month (5,000 commoditized + 3,000 enhanced + 1,500 proprietary + 500 exclusive)
- **Pro:** $499/month (20,000 commoditized + 10,000 enhanced + 5,000 proprietary + 2,000 exclusive)
- **Enterprise:** $1,999/month (100,000 commoditized + 50,000 enhanced + 25,000 proprietary + 10,000 exclusive)

## Support & Resources

### Documentation
- **LeafEngines API Docs:** https://leafengines.com/docs
- **OpenClaw Documentation:** https://docs.openclaw.ai
- **Skill Examples:** https://github.com/QWarranto/leafengines-claude-mcp

### Community
- **Discord:** https://discord.gg/leafengines
- **GitHub Issues:** https://github.com/QWarranto/leafengines-claude-mcp/issues
- **Agricultural Forums:** [Your local extension service]

### Training
- **Video Tutorials:** https://leafengines.com/tutorials
- **Webinars:** Monthly agricultural AI workshops
- **Consulting:** Custom implementation support

## Updates & Maintenance

### Skill Updates
This skill will be updated quarterly with:
- New agricultural data sources
- Improved workflow templates
- Additional cron job patterns
- Integration with new OpenClaw features

### Self-Maintenance
Users should:
- Monthly: Review and update location/crop settings
- Quarterly: Check for skill updates on Clawhub
- Annually: Review and optimize all workflows
- As needed: Update API key and subscription plan

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- Built on [OpenClaw](https://openclaw.ai) agent framework
- Integrated with [LeafEngines](https://leafengines.com) agricultural intelligence
- Data from USDA, EPA, NOAA, and other public sources
- Inspired by farmers, researchers, and agricultural professionals worldwide

---

## ⚡ Get Started Now

**Free tier — no signup, no credit card:**
- **Test key:** `leaf-test-370df0a2e62e` (works immediately)
- **Free header:** `x-free-tier: true` (no key needed)

**Ready for production? Founder pricing ends June 1, 2026:**
- [Starter — $10/mo → lifetime $49/mo lock →](https://buy.stripe.com/14A7sL30y8bR2F4fbgaMU02)
- [Pro — $49/mo → lifetime $149/mo lock →](https://buy.stripe.com/cNi3cv1WuajZcfE7IOaMU03)

**Get a professional soil report (no coding required):** [soilcertify.com →](https://soilcertify.com)

---

**Start your agricultural AI journey today! 🌱🤖**

*Transform your OpenClaw workspace into an agricultural intelligence command center.*

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
