---
name: agricultural-intelligence
description: Soil analysis, crop recommendations, farm optimization, and sensor validation for agricultural professionals. Use this skill whenever users ask about soil data, crop selection, farm profitability, planting schedules, sensor calibration, or agricultural optimization. Make sure to use this skill whenever the user mentions farming, agriculture, soil tests, crop yields, profit margins, sensor readings, or needs agricultural intelligence, even if they don't explicitly ask for "soil analysis" or "crop recommendations."
dependencies:
  - python3
  - requests
  - pandas
  - numpy
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

# Agricultural Intelligence

## Overview

This skill enables Claude to provide comprehensive agricultural intelligence including soil analysis, crop recommendations, profitability calculations, and sensor validation. It's designed for farmers, agricultural professionals, researchers, and anyone working with agricultural data.

**Keywords**: agriculture, farming, soil analysis, crop recommendations, farm profitability, sensor calibration, agricultural optimization, soil tests, crop yields, planting schedules, fertilizer calculations

## Quick Reference

### When to Use This Skill
Use this skill whenever users mention:
- Soil data or soil test results
- Crop selection or what to plant
- Farm profitability or ROI calculations  
- Planting schedules or timing
- Sensor readings or calibration
- Agricultural optimization or improvements

### Core Capabilities
1. **Soil Analysis** - Interpret soil test data, provide recommendations
2. **Crop Recommendations** - Suggest optimal crops based on conditions
3. **Profitability Analysis** - Calculate margins, costs, ROI
4. **Sensor Validation** - Detect drift, recommend calibration
5. **Planting Guidance** - Provide schedules, density recommendations

## Detailed Instructions

For complete agricultural intelligence, follow these steps:

### 1. Soil Data Analysis
When users provide soil test data:
- Read and interpret pH, nutrient levels (N, P, K), organic matter
- Compare to USDA reference values for soil type
- Provide classification and recommendations
- Calculate fertilizer requirements if needed

**Reference**: See `REFERENCE.md` for soil classification tables and formulas.

### 2. Crop Recommendation Process
For crop selection questions:
- Analyze soil conditions against crop requirements
- Calculate suitability scores (0-100%)
- Estimate expected yields based on conditions
- Provide top 3 recommendations with reasoning

**Script**: Use `soil_analysis.py` for automated crop scoring and yield estimation.

### 3. Profitability Calculations
When users ask about farm economics:
- Gather crop, yield, price, and cost data
- Calculate gross revenue, total costs, net profit
- Provide ROI percentages and break-even analysis
- Compare multiple crop options

**Data**: Current market prices and cost structures in `REFERENCE.md`.

### 4. Sensor Validation
For sensor data questions:
- Check for drift (>10% deviation from baseline)
- Verify calibration schedule (<6 months recommended)
- Compare to manual measurements if available
- Provide recalibration recommendations

**Thresholds**: Acceptable drift limits and calibration schedules in `REFERENCE.md`.

## Example Prompts

### Soil Analysis Prompts:
- "Here are my soil test results: pH 6.2, nitrogen 25 ppm, phosphorus 15 ppm, potassium 150 ppm. What does this mean?"
- "Interpret this soil report for my farm"
- "Are these nutrient levels good for growing corn?"
- "What should I add to improve my soil?"

### Crop Recommendation Prompts:
- "What should I plant in my field with these soil conditions?"
- "Compare corn and soybeans for my 100-acre farm"
- "Recommend crops for clay soil with pH 6.5"
- "What's the best crop for maximum profit?"

### Profitability Prompts:
- "Calculate profit for 50 acres of wheat"
- "What's the ROI on tomato farming?"
- "Compare costs for different crops"
- "Estimate my farm's revenue potential"

### Sensor & Calibration Prompts:
- "My pH sensor reads 6.8 but manual test shows 6.2"
- "How often should I calibrate soil moisture sensors?"
- "Check if my sensor data looks accurate"
- "Detect drift in my agricultural sensors"

### General Agriculture Prompts:
- "When should I plant corn in Iowa?"
- "How much fertilizer do I need?"
- "Optimize my farm layout for better yields"
- "Improve soil health on my land"

## Example Workflows

### 1. Soil Analysis Workflow
**User**: "My soil test shows pH 6.2, N 25 ppm, P 15 ppm, K 150 ppm. What should I do?"

**Claude with this skill**:
1. Loads soil analysis formulas from `REFERENCE.md`
2. Runs `soil_analysis.py` to calculate nutrient classifications
3. Provides: "pH 6.2 (optimal), N 25 ppm (low), P 15 ppm (low), K 150 ppm (medium)"
4. Recommends: "Add 30 lbs N/acre, 45 lbs P₂O₅/acre. Top crops: soybeans (85%), corn (75%)"

### 2. Profitability Comparison Workflow  
**User**: "Compare corn vs soybeans for my 100-acre field"

**Claude with this skill**:
1. Accesses market prices from `REFERENCE.md`
2. Uses `soil_analysis.py` to estimate yields based on soil
3. Calculates: "Corn: $510/acre profit, Soybeans: $392/acre profit"
4. Concludes: "Corn better by $11,800 total. ROI: 94% vs 112%"

### 3. Sensor Validation Workflow
**User**: "pH sensor reads 6.8, manual test 6.2, calibrated 7 months ago"

**Claude with this skill**:
1. Checks drift thresholds in `REFERENCE.md`
2. Calculates: "(6.8-6.2)/6.2×100 = 9.7% drift over 7 months"
3. Compares: "Exceeds 10% threshold for 6-month calibration"
4. Recommends: "Immediate recalibration. Monitor weekly after."

## Bundled Resources

### Reference Files
- `REFERENCE.md` - Soil formulas, crop databases, calibration schedules
- Contains: USDA soil classifications, nutrient tables, price data, formulas

### Executable Scripts  
- `soil_analysis.py` - Main analysis engine with SoilAnalyzer class
- `test_skill.py` - Validation and testing suite
- `requirements.txt` - Python package dependencies

### Data Sources
- **SoilSidekickPro API**: `https://app.soilsidekickpro.com/leafengines`
- **USDA Databases**: SSURGO soil survey data
- **Market Prices**: Current commodity pricing
- **Weather Data**: NOAA and weather service integration

## File Processing

Claude can process these agricultural data formats:
- Soil test results (CSV, Excel, PDF)
- Sensor data exports (JSON, CSV)
- Field mapping data (GeoJSON, shapefiles)
- Historical yield records

## Best Practices

### Data Quality
- Validate sensor data before analysis
- Flag readings >10% from historical baselines  
- Recommend recalibration every 6 months
- Use USDA references for soil type comparisons

### Risk Management
- Provide confidence scores for recommendations
- Highlight assumptions and limitations
- Suggest small-scale trial validation
- Include contingency planning

### Sustainability
- Recommend soil health improvements
- Suggest cover cropping strategies
- Calculate carbon sequestration
- Provide water conservation advice

## Technical Notes

### Python Requirements
```bash
pip install -r requirements.txt
```

### Script Usage
```python
from soil_analysis import SoilAnalyzer
analyzer = SoilAnalyzer()
results = analyzer.analyze_soil(soil_data)
```

### Testing
```bash
python test_skill.py
```

## Support & Community

- **Discord**: https://discord.gg/leafengines
- **GitHub**: https://github.com/QWarranto/leafengines-clawhub-skill
- **Feedback**: Built with input from 1,977 agricultural professionals on Reddit

---

*This skill addresses critical agricultural issues identified by experts, including sensor drift (~15% after 6 months) and calibration requirements.*

## 💰 Pricing

### Free Tier — No Credit Card
- **Test key:** `leaf-test-370df0a2e62e`
- **Free header:** `x-free-tier: true`
- **Includes:** Basic soil analysis, county lookup, TurboQuant check
- **Try it:** [soilcertify.com →](https://soilcertify.com)

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
