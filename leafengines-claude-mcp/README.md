# LeafEngines MCP Server for Claude Desktop
## Agricultural Intelligence for AI Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-blue)](https://spec.modelcontextprotocol.io)
[![Claude Desktop](https://img.shields.io/badge/Claude-Desktop-purple)](https://claude.ai/desktop)

Add patent-pending agricultural intelligence to your Claude conversations. Get soil analysis, environmental compatibility scores, planting optimization, and more.

## 🚀 Quick Start

### 1. Get API Key
Visit: [https://soilsidekick.com/api-keys](https://soilsidekick.com/api-keys)

### 2. Configure Claude Desktop
Edit `~/.config/claude-desktop/mcp.json` (create if it doesn't exist):

```json
{
  "mcpServers": {
    "leafengines": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-leafengines",
        "https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server"
      ],
      "env": {
        "LEAFENGINES_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

### 3. Restart Claude Desktop
Close and reopen Claude Desktop for changes to take effect.

## 🛠️ Available Tools (9 Total)

### Exclusive Tier ($0.02/call) ⭐
- **`environmental_impact_analysis`** - Patent-pending Environmental Compatibility Score combining AlphaEarth satellite embeddings with USDA+EPA+NOAA data fusion
- **`planting_optimization`** - Multi-parameter phenology models for optimal planting windows and yield predictions

### Proprietary Tier ($0.01/call)
- **`carbon_credit_calculator`** - Calculate carbon credit potential using internal models
- **`generate_vrt_prescription`** - Create variable rate technology (VRT) prescription maps

### Enhanced Tier ($0.003/call)
- **`agricultural_intelligence`** - AI-powered agricultural insights and recommendations
- **`safe_identification`** - Plant identification with toxic lookalike warnings

### Commoditized Tier ($0.001/call)
- **`get_soil_data`** - USDA SSURGO soil analysis (pH, nutrients, organic matter)
- **`county_lookup`** - Resolve US location names to FIPS codes
- **`territorial_water_quality`** - EPA water quality data and contamination risk scores

## 💰 Pricing

### Pay-As-You-Go
- **Commoditized:** $0.001 per call (public data access)
- **Enhanced:** $0.003 per call (AI processing)
- **Proprietary:** $0.01 per call (internal models)
- **EXCLUSIVE:** $0.02 per call (patent-pending intelligence) ⭐

### Monthly Plans (Recommended)
- **Starter:** $149/month (5,000 commoditized + 3,000 enhanced + 1,500 proprietary + 500 exclusive calls)
- **Pro:** $499/month (20,000 commoditized + 10,000 enhanced + 5,000 proprietary + 2,000 exclusive calls)
- **Enterprise:** $1,999/month (100,000 commoditized + 50,000 enhanced + 25,000 proprietary + 10,000 exclusive calls)

## 📖 Examples

### Soil Analysis Example
```bash
# Claude will use these tools automatically when you ask:
"Can you analyze the soil in Travis County, Texas for corn planting?"
```

Claude will:
1. Use `county_lookup` to find FIPS code (48453)
2. Use `get_soil_data` for soil composition
3. Use `agricultural_intelligence` for crop-specific recommendations
4. Use `planting_optimization` for timing advice

### Environmental Assessment Example
```bash
"What's the environmental impact of land in Travis County?"
```

Claude will:
1. Use `environmental_impact_analysis` for comprehensive scoring ⭐
2. Use `territorial_water_quality` for water safety
3. Use `carbon_credit_calculator` for sustainability metrics

## 🔧 Advanced Configuration

### Multiple Environments
```json
{
  "mcpServers": {
    "leafengines_dev": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-leafengines", "https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server"],
      "env": {"LEAFENGINES_API_KEY": "dev_key"}
    },
    "leafengines_prod": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-leafengines", "https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server"],
      "env": {"LEAFENGINES_API_KEY": "prod_key"}
    }
  }
}
```

### Cost Optimization
```json
{
  "mcpServers": {
    "leafengines": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-leafengines", "https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server"],
      "env": {
        "LEAFENGINES_API_KEY": "your_key",
        "LEAFENGINES_TIER_PREFERENCE": "cost_saving" // or "balanced", "premium"
      }
    }
  }
}
```

## 🎯 Use Cases

### For Agricultural Consultants
- Soil analysis for clients
- Crop planning and yield predictions
- Environmental compliance checks
- Carbon credit calculations

### For Environmental Researchers
- Comprehensive environmental assessments
- Water quality monitoring
- Biodiversity impact analysis
- Sustainability scoring

### For Farmers & Land Managers
- Optimal planting timing
- Variable rate prescription maps
- Input optimization (fertilizer, water)
- Risk assessment and mitigation

### For Foragers & Naturalists
- Plant identification with safety warnings
- Habitat analysis
- Seasonal planning
- Educational content creation

## 📊 Monitoring & Analytics

Track your usage at: [https://soilsidekick.com/dashboard](https://soilsidekick.com/dashboard)

- Real-time call tracking by tier
- Monthly cost projections
- Most-used tools analysis
- Usage alerts and recommendations

## 🚨 Troubleshooting

### Common Issues

**"Missing x-api-key header"**
- Verify API key is correct in `mcp.json`
- Regenerate key if needed at https://soilsidekick.com/api-keys

**Claude doesn't recognize tools**
- Restart Claude Desktop after configuration
- Check `mcp.json` syntax is valid JSON
- Verify MCP server URL is correct

**"Invalid county FIPS code"**
- Use `county_lookup` tool first to get correct FIPS codes
- Ensure 5-digit format (e.g., "48453" for Travis County, TX)

**High costs unexpectedly**
- Review which tools you're using most
- Consider switching to monthly plan
- Use cost-saving tier preference

## 🤝 Community & Support

- **Discord:** [Join our community](https://discord.gg/leafengines)
- **Email:** api@leafengines.com
- **Website:** [https://leafengines.com](https://leafengines.com)
- **Documentation:** [https://leafengines.com/docs/mcp](https://leafengines.com/docs/mcp)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on the [Model Context Protocol](https://spec.modelcontextprotocol.io)
- Integrated with [Claude Desktop](https://claude.ai/desktop)
- Powered by USDA, EPA, NOAA, and AlphaEarth satellite data

---

**Happy farming with Claude! 🌱🤖**

*LeafEngines - Patent-pending agricultural intelligence for AI agents*