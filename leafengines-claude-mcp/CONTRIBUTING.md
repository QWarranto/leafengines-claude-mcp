# Contributing to LeafEngines

Thank you for your interest in contributing to LeafEngines! This repository contains multiple projects, each with its own contribution guidelines.

## 📦 Repository Structure

This repository contains several LeafEngines projects:

### **1. MCP Server (`leafengines-mcp-server/`)**
- Agricultural intelligence MCP server for Claude Desktop
- [CONTRIBUTING.md](leafengines-mcp-server/CONTRIBUTING.md)

### **2. ClawHub Skill (`leafengines-clawhub-skill/`)**
- OpenClaw skill for agricultural intelligence
- [CONTRIBUTING.md](leafengines-clawhub-skill/CONTRIBUTING.md)

### **3. Claude Skill (`leafengines-claude-skill/`)**
- Claude.ai skill for agricultural analysis
- [CONTRIBUTING.md](leafengines-claude-skill/CONTRIBUTING.md)

### **4. Other Skills**
- `leafengines-agricultural-intelligence/`
- `leafengines-arbitrage-skill/`
- `leafengines-opportunity-scanner/`
- `leafengines-workspace-skill/`

## 🎯 Project Philosophy

All LeafEngines projects follow the **"thin integration adapter"** philosophy:

### **What's Open Source:**
- Protocol implementations (MCP, skill definitions)
- Tool schemas and interface definitions
- Request forwarding logic
- Documentation and examples

### **What's NOT Open Source:**
- Proprietary algorithms (TurboQuant, AlphaEarth embeddings)
- Business logic and intelligence
- Machine learning models
- Patent-pending implementations

All proprietary technology remains in the **LeafEngines backend API**, which requires authentication.

## 🚀 Getting Started

### **For MCP Server Contributions:**
See: [leafengines-mcp-server/CONTRIBUTING.md](leafengines-mcp-server/CONTRIBUTING.md)

### **For ClawHub Skill Contributions:**
See: [leafengines-clawhub-skill/CONTRIBUTING.md](leafengines-clawhub-skill/CONTRIBUTING.md)

### **For Claude Skill Contributions:**
See: [leafengines-claude-skill/CONTRIBUTING.md](leafengines-claude-skill/CONTRIBUTING.md)

## 📝 General Contribution Guidelines

### **1. Code Style**
- Follow existing patterns in each project
- Use appropriate language conventions (TypeScript for MCP, YAML for skills)
- Include clear comments and documentation
- Test changes before submitting

### **2. Pull Request Process**
1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add some amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **3. What to Contribute**
- Bug fixes and improvements
- Documentation enhancements
- Integration examples
- Test cases
- Tool schema additions (generic descriptions only)

### **4. What NOT to Contribute**
- Proprietary algorithms or business logic
- Hardcoded API keys or secrets
- IP-sensitive code
- Specific technical details of backend implementations

## 🐛 Reporting Issues

### **Bug Reports**
When reporting bugs, please include:
1. **Project:** Which LeafEngines project (MCP server, ClawHub skill, etc.)
2. **Environment:** OS, version, dependencies
3. **Steps to reproduce:** Clear, step-by-step instructions
4. **Expected behavior:** What you expected to happen
5. **Actual behavior:** What actually happened
6. **Logs:** Any error messages or console output

### **Feature Requests**
For feature requests:
1. **Use case:** Describe the problem you're trying to solve
2. **Proposed solution:** How you think it should work
3. **Alternatives considered:** Other approaches you've considered

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project you're contributing to. See individual project LICENSE files for details.

## 🤝 Code of Conduct

### **Be Respectful**
- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community

### **No Harassment**
Harassment of any kind will not be tolerated, including:
- Offensive comments related to gender, gender identity, sexual orientation, disability, physical appearance, race, religion
- Sexual images in public spaces
- Deliberate intimidation, stalking, or following
- Harassing photography or recording
- Sustained disruption of discussions
- Inappropriate physical contact
- Unwelcome sexual attention

## 🔗 Resources

- **Website:** [https://soilsidekickpro.com](https://soilsidekickpro.com)
- **API Documentation:** [https://app.soilsidekickpro.com/api-docs](https://app.soilsidekickpro.com/api-docs)
- **MCP Registry:** [io.github.QWarranto/leafengines](https://registry.modelcontextprotocol.io/servers/io.github.QWarranto/leafengines)
- **npm Package:** [@ancientwhispers54/leafengines-mcp-server](https://www.npmjs.com/package/@ancientwhispers54/leafengines-mcp-server)

## 📞 Getting Help

- **GitHub Issues:** For bug reports and feature requests
- **Pull Requests:** For code contributions
- **Email:** Contact through GitHub profile

---

Thank you for contributing to agricultural AI accessibility! 🌱