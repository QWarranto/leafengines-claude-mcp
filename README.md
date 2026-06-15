# LeafEngines - Agricultural AI Intelligence Platform

🌱 **TurboQuant-Powered Environmental Intelligence** - Soil analysis, crop recommendations, weather forecasts, and environmental impact assessment for sustainable agriculture. The only patent-protected agricultural intellgence platform in the MCP ecosystem.

##  Overview

LeafEngines provides agricultural intelligence through multiple integration channels:
- **MCP Server** for Claude Desktop and MCP-compatible clients
- **ClawHub Skill** for OpenClaw agents  
- **Claude Skill** for Claude.ai users
- **Composio Integration** for enterprise AI agents
- **Direct API** for developers and applications

##  Repository Structure

```
leafengines-claude-mcp/
├── leafengines-mcp-server/          # MCP Server (npm package)
│   ├── README.md                    # Installation & usage
│   ├── src/                         # TypeScript source
│   └── dist/                        # Compiled JavaScript
├── leafengines-clawhub-skill/       # OpenClaw skill
│   ├── README.md                    # OpenClaw integration
│   ├── SKILL.md                     # Skill definition
│   ├── references/                  # Reference materials
│   └── scripts/                     # Helper scripts
├── leafengines-claude-skill/        # Claude.ai skill
│   ├── README.md                    # Claude integration
│   └── SKILL.md                     # Skill definition
├── leafengines-agricultural-intelligence/ # Core intelligence
├── leafengines-opportunity-scanner/ # Market opportunity tools
├── leafengines-arbitrage-skill/     # Agricultural arbitrage
└── leafengines-workspace-skill/     # Workspace management
```

## 🌾 Core Capabilities

### USDA, EPA & NOAA Data Integration
- **USDA Soil Analysis** - Comprehensive soil composition, pH, N/P/K recommendations from SSURGO database
- **EPA Water Quality** - National water quality monitoring and contamination risk assessment
- **NOAA Climate Insights** - Historical weather data, climate trends, and agricultural forecasting

### Offline-First for Deep Canopy & GPS-Denied Operations
- **Works anywhere** - No internet required for core functionality
- **Deep canopy compatible** - Designed for remote agricultural environments with limited connectivity
- **GPS-denied ready** - Military-grade positioning algorithms for contested environments
- **Offline-first architecture** - Local processing without cloud dependency

### Environmental Intelligence & Carbon Credit Calculations
- **Carbon Credit Calculations** - Accurate emissions tracking for regulatory compliance
- **Sustainability Scoring** - Environmental impact assessment and reporting
- **Environmental compatibility** - Patent-pending algorithms for ecosystem analysis

## 🛡️ Enterprise-Grade Governance (New!)

**Built-in production readiness from day one:**
- ✅ **Complete audit logging** - Every tool call tracked with attribution
- ✅ **Operations dashboard** - Real-time monitoring and anomaly detection  
- ✅ **PII protection** - Automatic sanitization of sensitive data
- ✅ **Compliance ready** - SOC 2 alignment, export capabilities
- ✅ **Session correlation** - Trace multi-step agent reasoning

**Why this matters:** Most MCP servers lack governance until enterprises demand it (painful retrofit). We built it in from the start.

### **TurboQuant Performance**
- **6x memory reduction** with Google TurboQuant optimization
- **8x faster inference** for agricultural analysis
- **Gemma 7B on 4GB devices** (previously required 8GB+)
- **Cloud-equivalent performance** on edge devices

### **Agricultural Intelligence Tools**
1. **Soil Analysis** - USDA soil data, satellite intelligence, environmental factors
2. **Crop Recommendations** - Optimal crop selection based on soil and climate
3. **Weather Forecasts** - Agricultural weather data for planning
4. **Environmental Impact** - Carbon footprint, water usage, sustainability analysis
5. **TurboQuant Capabilities** - FREE hardware optimization check (no API key required)
6. **Pest Detection** - Identify common agricultural pests
7. **Irrigation Scheduling** - Water optimization based on weather
8. **Yield Prediction** - Crop yield estimates
9. **Market Prices** - Agricultural commodity prices
10. **Sustainability Score** - Environmental impact assessment

## Quick Start

### **Option 1: MCP Server (Claude Desktop)**
```bash
# Install globally

## 🎯 QGIS Plugin Officially Approved!

**Plugin ID:** 4987 (LeafEngines Agricultural Intelligence)  
**Version:** 1.0.2 Experimental  
**Status:** ✅ **PUBLICLY AVAILABLE**  
**Download:** https://plugins.qgis.org/plugins/qgis_leafengines/version/1.0.2/download/

### Key Features:
- **USDA soil data** - Soil composition, pH, N/P/K recommendations
- **EPA water quality** - Water quality metrics and analysis
- **NOAA climate data** - Historical weather patterns and agricultural forecasting
- **Satellite vegetation indices** - NDVI, water-stress overlays from NASA MODIS
- **AI-powered crop recommendations** - Tailored to exact field polygons
- **Carbon credit calculations** - Environmental impact scoring for regulatory compliance
- **Offline-first architecture** - Works in remote/"deep canopy" areas
- **GPS-denied capabilities** - Military-proven algorithms for contested environments

### Strategic Advantages for Partners:
1. **Pre-vetted, low-risk integration** - Officially approved by QGIS after rigorous review
2. **Seamless future-proofing** - Aligns with QGIS release cycles (QGIS 4.0.0+ ready)
3. **Instant credibility** - Discoverable by 500,000+ QGIS users in agriculture sector
4. **Regulatory advantage** - Preferred for government/EPA/USDA-related procurements
5. **Ecosystem power** - Integrates with thousands of complementary QGIS plugins

### For OEM Partners:
Embed LeafEngines agricultural intelligence directly into your hardware or software platforms with confidence. The official QGIS approval eliminates weeks of custom validation, security audits, and compatibility testing.

*Approved: April 14, 2026*

npm install -g @ancientwhispers54/leafengines-mcp-server

# Run the server
leafengines-mcp-server
```

**MCP Registry:** `io.github.QWarranto/leafengines` version 1.1.5

### **Option 2: OpenClaw Skill**
```bash
# Install via ClawHub (available now)
clawhub install leafengines

# Or manually add to skills directory
```

### **Option 3: Direct API**
```bash
# Working API now available!
# URL: https://leafengines-agricultural-intelligence.onrender.com
# Access: Comment on GitHub Issue #NUMBER

# Test FREE tool
curl -X POST https://app.soilsidekickpro.com/turbo-quant-capabilities
```

##  Pricing

### **FREE Tier**
- `turbo_quant_capabilities` tool - No API key required
- Hardware optimization check
- TurboQuant compatibility verification

### **Paid Tiers** (per 1,000 requests)
- **Commoditized:** $0.001 (Basic soil/weather data)
- **Enhanced:** $0.003 (Environmental impact, crop suitability)
- **Proprietary:** $0.01 (Planting optimization, carbon credits)
- **EXCLUSIVE:** $0.02 (Patent-pending environmental compatibility)

### **Monthly Plans**
- **Starter:** $149/month (5k commoditized + 3k enhanced + 1.5k proprietary + 500 exclusive)
- **Pro:** $499/month (20k commoditized + 10k enhanced + 5k proprietary + 2k exclusive)
- **Enterprise:** $1,999/month (100k commoditized + 50k enhanced + 25k proprietary + 10k exclusive)

## 🔗 Integration Guides

### **Claude Desktop Configuration**
Add to `mcp.json`:
```json
{
  "mcpServers": {
    "leafengines": {
      "command": "leafengines-mcp-server",
      "env": {
        "LEAFENGINES_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### **OpenClaw Configuration**
Add to OpenClaw config:
```yaml
skills:
  leafengines:
    enabled: true
    config:
      api_key: YOUR_API_KEY_HERE
      base_url: https://app.soilsidekickpro.com/api-docs
```

### **Composio Integration**
LeafEngines is available on Composio platform as custom tools for enterprise AI agents.

##  Documentation

### **API Documentation**
- **Base URL:** `https://app.soilsidekickpro.com/api-docs`
- **Authentication:** `x-api-key` header
- **Documentation:** [https://app.soilsidekickpro.com/api-docs](https://app.soilsidekickpro.com/api-docs)
- **MCP Documentation:** [https://app.soilsidekickpro.com/mcp](https://app.soilsidekickpro.com/mcp)

### **MCP Server**
- **npm:** [@ancientwhispers54/leafengines-mcp-server](https://www.npmjs.com/package/@ancientwhispers54/leafengines-mcp-server)
- **Registry:** [io.github.QWarranto/leafengines](https://registry.modelcontextprotocol.io/servers/io.github.QWarranto/leafengines)
- **GitHub:** [leafengines-mcp-server](https://github.com/QWarranto/leafengines-claude-mcp/tree/main/leafengines-mcp-server)
- **MCP Documentation:** [https://app.soilsidekickpro.com/mcp](https://app.soilsidekickpro.com/mcp)

### **Skills & Integrations**
- **ClawHub Skill:** For OpenClaw agents
- **Claude Skill:** For Claude.ai users
- **Composio Tools:** For enterprise AI agents

##  Contributing

Contributions are welcome! Please see individual directory `CONTRIBUTING.md` files for guidelines.

### **Project Philosophy**
This repository contains **integration adapters only**. All proprietary intelligence (TurboQuant, AlphaEarth embeddings, phenology models) remains in the backend API.

### **What to Contribute**
- Bug fixes and improvements
- Documentation enhancements
- Integration examples
- Test cases

### **What NOT to Contribute**
- Proprietary algorithms
- Hardcoded business logic
- IP-sensitive code

## 📄 License

### **Integration Code**
Apache 2.0 License - See individual directory LICENSE files.

### **API Service**
Commercial terms with FREE tier available. See [pricing section](#-pricing) or [https://app.soilsidekickpro.com/mcp](https://app.soilsidekickpro.com/mcp) for details.

### **TurboQuant Technology**
Based on Google's TurboQuant research (6x memory compression for LLMs).

## 👥 Join Our Community

**750+ developers are already using LeafEngines MCP Server!**

- 💬 **GitHub Discussions:** [Share your use cases & get help](https://github.com/QWarranto/leafengines-claude-mcp/discussions)
- 🎥 **Upcoming Videos:** Agricultural AI MCP tutorials (subscribe for updates)
- 🐦 **Twitter/X:** [@LeafEnginesAI](https://twitter.com/LeafEnginesAI) for updates
- 📧 **Newsletter:** Monthly MCP tips & agricultural AI insights

## 🌐 Links

- **Website:** [https://soilsidekickpro.com](https://soilsidekickpro.com)
- **Application:** [https://app.soilsidekickpro.com](https://app.soilsidekickpro.com)
- **API Docs:** [https://app.soilsidekickpro.com/api-docs](https://app.soilsidekickpro.com/api-docs)
- **MCP Documentation:** [https://app.soilsidekickpro.com/mcp](https://app.soilsidekickpro.com/mcp)
- **User Guide:** [https://app.soilsidekickpro.com/user-guide](https://app.soilsidekickpro.com/user-guide)
- **FAQ:** [https://app.soilsidekickpro.com/faq](https://app.soilsidekickpro.com/faq)
- **LeafEngines API:** [https://app.soilsidekickpro.com/leafengines-api](https://app.soilsidekickpro.com/leafengines-api)
- **Client Integration Guide:** [https://app.soilsidekickpro.com/client-integration-guide](https://app.soilsidekickpro.com/client-integration-guide)
- **SDK Changelog:** [https://app.soilsidekickpro.com/sdk-changelog](https://app.soilsidekickpro.com/sdk-changelog)
- **TurboQuant Capabilities:** [https://app.soilsidekickpro.com/turbo-quant-capabilities](https://app.soilsidekickpro.com/turbo-quant-capabilities)
- **Swagger UI:** [https://app.soilsidekickpro.com/swagger-ui](https://app.soilsidekickpro.com/swagger-ui)
- **MCP Registry:** [io.github.QWarranto/leafengines](https://registry.modelcontextprotocol.io/servers/io.github.QWarranto/leafengines)
- **npm Package:** [@ancientwhispers54/leafengines-mcp-server](https://www.npmjs.com/package/@ancientwhispers54/leafengines-mcp-server)
- **Composio:** Custom tools available on platform

## 🆓 Try It Free!

The `turbo_quant_capabilities` tool is completely free - no API key or payment required. Perfect for testing and demonstrations!

```bash
# Test the FREE tool
leafengines-mcp-server
# Then in Claude Desktop, ask: "Check TurboQuant capabilities"
```

## 📞 Support

- **GitHub Issues:** [Bug reports and feature requests](https://github.com/QWarranto/leafengines-claude-mcp/issues)
- **API Support:** Contact through [API documentation](https://app.soilsidekickpro.com/api-docs) or [MCP documentation](https://app.soilsidekickpro.com/mcp)
- **Community:** OpenClaw Discord, Claude Discord MCP channel

---

🌱 **Happy farming with AI!** Powered by TurboQuant technology.
