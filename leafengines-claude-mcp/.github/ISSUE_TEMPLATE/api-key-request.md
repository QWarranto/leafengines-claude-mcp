---
name: API Key Request
about: Request an API key for LeafEngines MCP Server
title: "[API Key] Your Name or Organization"
labels: api-key
assignees: ''
---

## API Key Request

**Name:** [Your Name]
**Email:** [Your Email]
**Organization:** [Optional - Company/University/Project]

### Intended Use Case
Describe how you plan to use the LeafEngines MCP Server:

### Plan Selection
- [ ] **Starter** ($149/month): 5k commoditized + 3k enhanced + 1.5k proprietary + 500 exclusive calls
- [ ] **Pro** ($499/month): 20k commoditized + 10k enhanced + 5k proprietary + 2k exclusive calls  
- [ ] **Enterprise** ($1,999/month): 100k commoditized + 50k enhanced + 25k proprietary + 10k exclusive calls
- [ ] **Pay-as-you-go** (start with $50 credit)

### Expected Monthly Usage
Estimated number of calls per month: [e.g., 1,000-5,000]

### Claude Desktop Configuration
I understand I need to add this to `~/.config/claude-desktop/mcp.json`:
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
        "LEAFENGINES_API_KEY": "[API_KEY]"
      }
    }
  }
}
```

### Additional Notes
[Any other information that might be helpful]

---

**Next Steps:**
1. We'll review your request
2. Send a Stripe invoice for your selected plan
3. Once paid, we'll provide your API key via email
4. You can start using the MCP server immediately