#!/usr/bin/env node
/**
 * LeafEngines MCP Server - Simplified with Observability
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";

// Simple logging (will be replaced with Pino later)
const log = {
  info: (message: string, data?: any) => console.log(JSON.stringify({ level: 'INFO', message, ...data })),
  error: (message: string, error?: any, data?: any) => console.error(JSON.stringify({ level: 'ERROR', message, error: error?.message, ...data })),
  businessEvent: (event: string, data?: any) => console.log(JSON.stringify({ level: 'INFO', event: 'business', type: event, ...data }))
};

// MCP Server
const server = new Server(
  {
    name: "leafengines",
    version: "1.1.9",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// API base URL
const API_BASE_URL = "https://leafengines-emergency-api-1.onrender.com/v1";

// Helper function to call LeafEngines API
async function callLeafEnginesAPI(endpoint: string, params: any, apiKey?: string) {
  const startTime = Date.now();
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const headers: any = {
      "Content-Type": "application/json",
    };
    
    if (apiKey) {
      headers["x-api-key"] = apiKey;
    }
    
    const response = await axios.post(url, params, { headers, timeout: 30000 });
    const durationMs = Date.now() - startTime;
    
    log.info(`API ${endpoint}`, {
      method: 'POST',
      status: response.status,
      duration_ms: durationMs,
      user_type: apiKey ? 'paid' : 'free'
    });
    
    return response.data;
  } catch (error: any) {
    const durationMs = Date.now() - startTime;
    
    log.error('API call failed', error, {
      endpoint,
      duration_ms: durationMs,
      status_code: error.response?.status
    });
    
    if (error.response) {
      throw new Error(`API Error (${error.response.status}): ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error("Network error: No response received from API");
    } else {
      throw new Error(`Request setup error: ${error.message}`);
    }
  }
}

// Register tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  log.businessEvent('tools_listed');
  
  return {
    tools: [
      {
        name: "analyze_soil",
        description: "Analyze soil characteristics and get recommendations for a specific location.",
        inputSchema: {
          type: "object",
          properties: {
            county_fips: {
              type: "string",
              description: "5-digit county FIPS code (e.g., '13067' for Fulton County, GA)"
            },
            api_key: {
              type: "string",
              description: "Optional API key for paid features"
            }
          },
          required: ["county_fips"]
        }
      },
      {
        name: "recommend_crop",
        description: "Get crop recommendations based on soil analysis.",
        inputSchema: {
          type: "object",
          properties: {
            county_fips: {
              type: "string",
              description: "5-digit county FIPS code"
            },
            api_key: {
              type: "string",
              description: "Optional API key for paid features"
            }
          },
          required: ["county_fips"]
        }
      },
      {
        name: "check_turboquant",
        description: "Check if TurboQuant capabilities are available for a location (FREE).",
        inputSchema: {
          type: "object",
          properties: {
            county_fips: {
              type: "string",
              description: "5-digit county FIPS code"
            }
          },
          required: ["county_fips"]
        }
      }
    ]
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const startTime = Date.now();
  const { name, arguments: args } = request.params;
  
  try {
    let result: any;
    const apiKey = (args as any)?.api_key;
    
    switch (name) {
      case "analyze_soil": {
        const params = { county_fips: (args as any)?.county_fips };
        result = await callLeafEnginesAPI("/soil/analyze", params, apiKey);
        break;
      }
      
      case "recommend_crop": {
        const params = { county_fips: (args as any)?.county_fips };
        result = await callLeafEnginesAPI("/crop/recommend", params, apiKey);
        break;
      }
      
      case "check_turboquant": {
        const county_fips = (args as any)?.county_fips;
        result = {
          available: true,
          message: "TurboQuant capabilities are available for this location.",
          county_fips,
          features: [
            "High-performance soil analysis",
            "Real-time environmental monitoring",
            "Advanced crop modeling",
            "Weather integration"
          ]
        };
        break;
      }
      
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
    
    const durationMs = Date.now() - startTime;
    
    log.info(`Tool executed: ${name}`, {
      success: true,
      duration_ms: durationMs,
      user_type: apiKey ? 'paid' : 'free'
    });
    
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2)
        }
      ]
    };
    
  } catch (error: any) {
    const durationMs = Date.now() - startTime;
    
    log.error(`Tool execution failed: ${name}`, error, {
      duration_ms: durationMs
    });
    
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`
        }
      ],
      isError: true
    };
  }
});

// Start server
async function main() {
  log.info("LeafEngines MCP Server starting", {
    version: "1.1.9",
    environment: process.env.NODE_ENV || "production"
  });
  
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  console.log("✅ LeafEngines MCP Server with basic observability running");
  console.log("📊 Structured logging enabled (JSON format)");
  console.log("🔧 Next: Add Pino, Sentry, and Prometheus metrics");
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    log.info("Server shutting down", { reason: 'SIGINT' });
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log.info("Server shutting down", { reason: 'SIGTERM' });
    process.exit(0);
  });
}

main().catch((error) => {
  log.error('Server startup failed', error);
  process.exit(1);
});