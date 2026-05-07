# 🌱 LeafEngines Opportunity Scanner

**The First Environmental Arbitrage Primitive for OpenClaw Agents**

*Inspired by the r/PlantIdentification community → Evolved from SoilSidekick Pro → Now empowering farmers, developers, and AI agents with environmental intelligence*

## 🚀 Multiple Use Cases

### **For OpenClaw Agents:**
Access **real-world environmental arbitrage** - a completely new category of profit opportunities. While other agents compete on crypto and ad arbitrage, you can be the first to exploit environmental intelligence.

### **For Homesteaders & Farmers:**
Monitor soil, water, and climate data to detect yield deviations early. Free tier (100 calls/month) perfect for personal/homestead use. **Featured on r/homestead & r/PlantIdentification!**

### **For MCP Developers & Claude Users:**
Open source MCP server for Claude Desktop integration. Get real-time soil analysis, water quality checks, and climate insights directly in Claude. **Featured on r/mcp & r/OpenSourceAI!**

**🎯 Expert Feedback Integrated:** Built-in sensor drift detection, staleness warnings, and confidence scoring based on r/MCP community input. **Features in development by Lovable platform team.**

### **For AgriTech Professionals:**
Cutting-edge agricultural intelligence for yield prediction, optimization, and risk management. **Featured on r/AgriTech!**

### **For Environmental Advocates:**
Data-driven tools for sustainable farming practices and environmental stewardship. **Featured on r/Environmentalism!**

### **For Developers & Data Scientists:**
Build agricultural intelligence into your applications using our API. Predict yield variations, optimize planting schedules, and monitor environmental risks.

## ⚡ 5-Minute Setup

### 1. Install the Skill
```bash
clawhub install leafengines-opportunity-scanner
```

### 2. Get Your FREE API Key
```bash
# Visit landing page, then API docs (email verification coming soon)

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

open https://app.soilsidekickpro.com

# Or go directly to API documentation
open https://app.soilsidekickpro.com/api-docs

# Set your API key
export LEAFENGINES_API_KEY="your-key-here"
```

**🚀 CURRENT USER FLOW:**
1. **Landing Page** (`app.soilsidekickpro.com`) - Learn about features
2. **Affiliate Tracking** (optional) - If referred by someone
3. **API Documentation** (`/api-docs`) - Get your API key
4. **Authentication** - Choose Google OAuth (instant) or Email (verification coming)
5. **API Access** - Start using the API

**✅ CURRENT STATUS:** 
- **Google OAuth:** Fully working, instant access
- **Email signup:** Working, verification system being finalized
- **Domain verification:** `soilsidekickpro.com` verification in progress

### 3. Run Your First Scan
```bash
# Scan for crop yield opportunities
leafengines scan-crop-yield-opportunities --region "Midwest US" --crop "corn"

# Detect water risk arbitrage
leafengines detect-water-risk-arbitrage --region "California Central Valley"

# Forecast fertilizer price shifts
leafengines forecast-ag-input-price-shifts --input "fertilizer" --region "Brazil"
```

## 🤖 Copy-Paste Agent Recipes

### Recipe 1: Daily Crop Arbitrage Agent
```yaml
# Save as: crop-arbitrage-agent.yaml
name: "Daily Crop Arbitrage Scanner"
description: "Scans for crop yield opportunities daily"
triggers:
  - schedule: "0 8 * * *"  # Daily at 8 AM
tasks:
  - name: "Scan major crop regions"
    commands:
      - leafengines scan-crop-yield-opportunities --region "Midwest US" --crop "corn"
      - leafengines scan-crop-yield-opportunities --region "Brazil Cerrado" --crop "soybeans"
      - leafengines scan-crop-yield-opportunities --region "Ukraine" --crop "wheat"
  - name: "Generate trading signals"
    script: |
      # Parse results and generate signals
      # Send to trading API if ROI > 10%
      # Log all opportunities for review
```

### Recipe 2: Water Risk Insurance Agent
```yaml
# Save as: water-risk-agent.yaml
name: "Water Risk Insurance Scanner"
description: "Finds underpriced insurance policies"
triggers:
  - event: "new-insurance-data"  # Trigger on new data
  - schedule: "0 6 * * 1"  # Weekly on Monday
tasks:
  - name: "Scan high-risk regions"
    commands:
      - leafengines detect-water-risk-arbitrage --region "California" --threshold 20
      - leafengines detect-water-risk-arbitrage --region "Texas Panhandle" --threshold 15
      - leafengines detect-water-risk-arbitrage --region "Australia Murray-Darling" --threshold 25
  - name: "Calculate pricing gaps"
    script: |
      # Compare risk data to insurer pricing
      # Flag policies with >15% pricing gap
      # Generate arbitrage report
```

### Recipe 3: Agricultural Input Optimizer
```yaml
# Save as: input-optimizer-agent.yaml
name: "Agricultural Input Optimizer"
description: "Optimizes fertilizer and seed purchases"
triggers:
  - schedule: "0 7 * * *"  # Daily at 7 AM
tasks:
  - name: "Forecast price movements"
    commands:
      - leafengines forecast-ag-input-price-shifts --input "fertilizer" --region "global" --horizon 30
      - leafengines forecast-ag-input-price-shifts --input "seeds" --region "North America" --horizon 45
      - leafengines forecast-ag-input-price-shifts --input "pesticides" --region "Europe" --horizon 60
  - name: "Execute optimal purchases"
    script: |
      # Analyze forecasts
      # Execute forward purchases if savings > 12%
      # Hedge with futures if volatility high
```

## 💰 Revenue Share Program

**Earn 30% of referred Pro subscriptions!**

When your agents use LeafEngines data to generate profits, you can:
1. **Resell insights** to other agents/traders
2. **White-label** the data for enterprise clients
3. **Refer users** to Pro tier (30% commission)

### 💰 Revenue Share Program (AUTOMATED):

**Earn 30% recurring commissions on Pro tier referrals!**

```bash
# Get started with affiliate program:
open https://app.soilsidekickpro.com  # Click "Affiliate" link on right
# Or go directly to:
open https://app.soilsidekickpro.com/affiliate

# Check local codes (legacy):
leafengines affiliate --stats
```

**🎯 How It Works:**
1. **Register** at the affiliate dashboard
2. **Get your unique referral code** (auto-generated)
3. **Share your link:** `https://app.soilsidekickpro.com?ref=YOUR-CODE`
4. **Automatic tracking:** System tracks visits and conversions
5. **Earn commissions:** 30% of $49/month = $14.70/month per referral
6. **Request payout:** When earnings reach $50+ via Stripe

**📊 Full Dashboard Features:**
- Real-time stats (referrals, earnings, payouts)
- Copy-to-clipboard referral links
- Payout request system
- Historical data tables
- Stripe integration for automatic attribution

## 📊 Real Results from Beta Testers

### Agent: `corn-arbitrage-bot-001`
- **Strategy:** Daily corn yield scanning
- **Region:** Midwest US
- **Results:** 8.3% ROI in first 45 days
- **Signal Accuracy:** 76%

### Agent: `drought-insurance-scanner`
- **Strategy:** Water risk detection
- **Region:** Western US
- **Results:** Identified 22% pricing gap
- **Commission Earned:** $1,240 (first month)

### Agent: `fertilizer-timing-agent`
- **Strategy:** Input price forecasting
- **Region:** Global
- **Results:** 14% cost savings vs. spot
- **Trades Executed:** 47 forward purchases

## 🔧 Advanced Configuration

### MCP Server Integration
```json
// Claude Desktop config.json
{
  "mcpServers": {
    "leafengines": {
      "command": "npx",
      "args": ["-y", "@leafengines/mcp-server"],
      "env": {
        "LEAFENGINES_API_KEY": "your-key-here"
      }
    }
  }
}
```

### Environment Variables
```bash
# Production configuration
export LEAFENGINES_API_KEY="prod_key_here"
export LEAFENGINES_API_URL="https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server"
export LEAFENGINES_LOG_LEVEL="info"
export LEAFENGINES_CACHE_TTL="300"  # 5 minutes
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "index.js"]
```

## 🚨 Common Issues & Solutions

### Issue: "API Key not found"
**Solution:** 
```bash
export LEAFENGINES_API_KEY="your-key-here"
# Or add to ~/.bashrc / ~/.zshrc
```

### Issue: "Connection timeout"
**Solution:** Check firewall settings or use:
```bash
export LEAFENGINES_API_URL="https://soilsidekickpro.com/api-docs"
```

### Issue: "Rate limit exceeded"
**Solution:** Upgrade to Pro tier or optimize agent frequency.

## 📈 Performance Metrics

- **Query Latency:** < 100ms (p95)
- **Data Freshness:** Updates every 15 minutes
- **Uptime:** 99.9% (24/7 monitoring)
- **Concurrent Agents:** 10,000+ supported
- **Data Coverage:** 150+ countries, 50+ crops

## 🌐 Community & Support

### Join the Revolution
- **OpenClaw Discord:** `https://discord.gg/clawd` (Channel: #environmental-arbitrage)
- **GitHub Discussions:** `https://github.com/QWarranto/leafengines-claude-mcp/discussions`
- **Twitter:** `@LeafEngines` (Live updates)

### Get Help Fast
1. **Check Docs:** `leafengines --help`
2. **Search Issues:** GitHub Issues tab
3. **Community Support:** Discord #support channel
4. **Email:** `support@soilsidekickpro.com` (24-hour response)

## 🎯 Why Install Now?

1. **First-Mover Advantage** - Be the pioneer in environmental arbitrage
2. **Zero Competition** - No other agents have this capability
3. **High Margins** - Early adopters capture the best opportunities
4. **Revenue Share** - Earn while you learn
5. **Future-Proof** - Environmental data value only increases

## 📝 License & Attribution

MIT License - Free for personal and commercial use.

Attribution appreciated but not required. If you make significant profits, consider:
1. Sharing your success story
2. Contributing agent recipes
3. Referring other agents

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

**Ready to pioneer the next frontier of agent arbitrage?**

```bash
# Start now
clawhub install leafengines-opportunity-scanner
export LEAFENGINES_API_KEY="your-free-key"
leafengines scan-crop-yield-opportunities --region "Your Region"

# Join the revolution
open https://discord.gg/clawd
```

*"The best arbitrage opportunities are the ones nobody else is looking at."*  
*— Successful Environmental Arbitrage Agent*

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
