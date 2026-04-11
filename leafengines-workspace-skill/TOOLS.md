# TOOLS.md - LeafEngines Agricultural Configuration

## 🔑 LeafEngines API Configuration

### API Access
- **API Key:** `ak_your_key_here` ← REPLACE WITH YOUR KEY
- **Base URL:** `https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server`
- **Dashboard:** https://soilsidekick.com/dashboard
- **Key Management:** https://soilsidekick.com/api-keys

### Your Subscription
- **Plan:** [Starter/Pro/Enterprise] ← UPDATE BASED ON YOUR PLAN
- **Monthly Calls:** [Your allowance]
- **Renewal Date:** [Date]
- **Cost Tracking:** Enabled in AGENTS.md cron jobs

## 🛠️ LeafEngines Tool Reference

### Quick Reference Table
| Tool | Tier | Cost/Call | Use When | Example Query |
|------|------|-----------|----------|---------------|
| `environmental_impact_analysis` | EXCLUSIVE | $0.02 | Environmental compliance, sustainability scoring | "Environmental impact of land in [County]" |
| `planting_optimization` | EXCLUSIVE | $0.02 | Planting schedules, yield predictions | "When to plant [crop] in [location]" |
| `carbon_credit_calculator` | Proprietary | $0.01 | Carbon credit calculations | "Carbon credits from 100 acres cover crops" |
| `generate_vrt_prescription` | Proprietary | $0.01 | Precision agriculture maps | "VRT map for nitrogen application" |
| `agricultural_intelligence` | Enhanced | $0.003 | General agricultural advice | "Best crop for my soil type" |
| `safe_identification` | Enhanced | $0.003 | Plant identification | "Is this plant edible?" |
| `get_soil_data` | Commoditized | $0.001 | Soil composition analysis | "Soil pH in [County]" |
| `county_lookup` | Commoditized | $0.001 | Location standardization | "FIPS code for [County]" |
| `territorial_water_quality` | Commoditized | $0.001 | Water safety assessment | "Water quality in [watershed]" |

## 📍 Your Location Configuration

### Primary Location
- **County:** [Your County, State] ← UPDATE
- **FIPS Code:** [00000] ← Run `county_lookup` to get this
- **Farm Size:** [acres]
- **Primary Crops:** [list crops]
- **Soil Type:** [clay/loam/sandy]
- **USDA Zone:** [zone]

### Secondary Locations (if applicable)
1. **Location 2:** [Details]
2. **Location 3:** [Details]

## 🌾 Crop-Specific Settings

### Crop Rotation Schedule
| Season | Crop | Variety | Planting Date | Harvest Date |
|--------|------|---------|---------------|--------------|
| Spring | [Crop] | [Variety] | [Date] | [Date] |
| Summer | [Crop] | [Variety] | [Date] | [Date] |
| Fall | [Crop] | [Variety] | [Date] | [Date] |
| Winter | Cover Crop | [Type] | [Date] | [Date] |

### Input Requirements
| Crop | Nitrogen (lbs/acre) | Phosphorus (lbs/acre) | Potassium (lbs/acre) | Water (inches) |
|------|---------------------|-----------------------|----------------------|----------------|
| Corn | 150 | 60 | 80 | 20-25 |
| Soybeans | 0 | 40 | 60 | 15-20 |
| Wheat | 120 | 50 | 60 | 12-18 |
| [Your Crop] | [ ] | [ ] | [ ] | [ ] |

## ⚙️ Integration Settings

### Weather Data Sources
- **Primary:** National Weather Service (free)
- **Secondary:** [Your preferred service]
- **API Key (if needed):** [key]
- **Update Frequency:** Hourly

### Market Data Sources
- **Commodity Prices:** USDA Market News
- **API Endpoint:** https://marsapi.ams.usda.gov
- **Key Crops to Monitor:** [Your crops]
- **Alert Threshold:** ±10% price change

### Sensor Configuration (if applicable)
- **Soil Moisture Sensors:** [Brand/Model]
- **API Endpoint:** [URL]
- **Update Frequency:** 15 minutes
- **Alert Thresholds:** <30% or >80% moisture

## 🔧 Technical Configuration

### OpenClaw Integration
```bash
# Test LeafEngines connection
curl -X POST -H "x-api-key: YOUR_KEY" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"tools/list","id":1}' https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server
```

### Cron Job Templates
See AGENTS.md for complete cron job examples. Key jobs:
1. **Daily health check** - 8 AM
2. **Weekly planting alerts** - Monday 7 AM  
3. **Market monitoring** - Every 6 hours
4. **Monthly carbon tracking** - 1st of month

### Memory Structure
```
memory/
├── agricultural-projects/  # Project folders
├── soil-analysis/          # Soil test history
├── crop-yields/           # Yield tracking
├── environmental-data/    # Compliance records
└── financials/           # Cost tracking
```

## 💰 Cost Management Settings

### Monthly Budget
- **Total Budget:** $[Amount]
- **Commoditized Tier:** $[Amount] (max [number] calls)
- **Enhanced Tier:** $[Amount] (max [number] calls)
- **Proprietary Tier:** $[Amount] (max [number] calls)
- **EXCLUSIVE Tier:** $[Amount] (max [number] calls)

### Alert Thresholds
```bash
# Budget alerts (add to cron)
if [ $(date +%d) -eq 15 ]; then
  echo "Mid-month budget check: You've used approximately $[amount]"
fi
```

### Cost-Saving Strategies
1. **Batch analysis** - Run multiple locations/crops at once
2. **Cache results** - Store frequent queries in memory
3. **Use lower tiers** when precision isn't critical
4. **Monthly plans** if usage > 10,000 calls/month

## 🎯 Workflow Templates

### Soil Analysis Workflow
```bash
# 1. Get location code
county_lookup "[Your County], [State]"

# 2. Get soil data  
get_soil_data "FIPS_CODE"

# 3. Get recommendations
agricultural_intelligence "soil_data" "crop=corn"

# 4. Check environmental impact
environmental_impact_analysis "FIPS_CODE"

# 5. Calculate carbon potential
carbon_credit_calculator "acres=100" "practice=cover_crops"
```

### Planting Planning Workflow
```bash
# 1. Check soil conditions
get_soil_data "FIPS_CODE"

# 2. Get planting window
planting_optimization "crop=corn" "location=FIPS_CODE"

# 3. Generate prescription map
generate_vrt_prescription "field=main" "input=nitrogen"

# 4. Calculate costs
# (Manual calculation based on inputs)
```

### Environmental Compliance Workflow
```bash
# 1. Water quality check
territorial_water_quality "watershed=[Your watershed]"

# 2. Environmental impact
environmental_impact_analysis "FIPS_CODE"

# 3. Carbon assessment
carbon_credit_calculator "acres=[Your acres]"

# 4. Generate report
# (Template in AGENTS.md projects/)
```

## 🚨 Emergency Contacts & Resources

### Immediate Issues
- **LeafEngines Support:** support@leafengines.com
- **API Issues:** Check https://status.leafengines.com
- **Support Questions:** support@soilsidekickpro.com

### Agricultural Resources
- **Local Extension Office:** [Phone/Email]
- **USDA Service Center:** [Location/Phone]
- **Emergency Weather:** National Weather Service alerts

### Technical Support
- **OpenClaw Documentation:** https://docs.openclaw.ai
- **Clawhub Support:** https://clawhub.ai/support
- **GitHub Issues:** https://github.com/QWarranto/leafengines-claude-mcp/issues

## 📊 Performance Metrics

### Key Performance Indicators (KPIs)
1. **Yield Improvement:** Target [percentage] increase
2. **Input Cost Reduction:** Target $[amount]/acre
3. **Environmental Score:** Target [score] improvement
4. **Water Use Efficiency:** Target [percentage] improvement
5. **Carbon Credits:** Target [number] credits/year

### Tracking Methods
```bash
# Monthly KPI calculation
echo "=== Monthly KPIs $(date +%Y-%m) ===" > kpis/$(date +%Y-%m).md
echo "Yield: [data]" >> kpis/$(date +%Y-%m).md
echo "Costs: [data]" >> kpis/$(date +%Y-%m).md
echo "Environmental: [data]" >> kpis/$(date +%Y-%m).md
```

## 🔄 Regular Maintenance

### Weekly Tasks (Monday)
1. Review cron job logs
2. Check API usage vs budget
3. Update crop progress notes
4. Review weather forecasts

### Monthly Tasks (1st of month)
1. Generate monthly reports
2. Update soil test records
3. Review and adjust budgets
4. Plan next month's activities

### Seasonal Tasks
1. **Spring:** Planting optimization, soil preparation
2. **Summer:** Growth monitoring, irrigation planning
3. **Fall:** Harvest planning, yield analysis
4. **Winter:** Planning, equipment maintenance, training

## 📚 Learning Resources

### LeafEngines Documentation
- **Full API Docs:** https://leafengines.com/docs
- **Tool Examples:** https://leafengines.com/examples
- **Case Studies:** https://leafengines.com/cases

### Agricultural References
- **USDA Resources:** https://www.usda.gov
- **Extension Services:** [Your local university]
- **Best Practices:** Industry publications

### OpenClaw Resources
- **Skills Guide:** https://docs.openclaw.ai/skills
- **Cron Jobs:** https://docs.openclaw.ai/cron
- **Memory Management:** https://docs.openclaw.ai/memory

---

**Remember to update bracketed values [like this] with your actual information!**

*Configuration last updated: $(date)*