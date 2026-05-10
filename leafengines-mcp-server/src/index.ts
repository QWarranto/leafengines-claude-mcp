#!/usr/bin/env node
/**
 * LeafEngines MCP Server
 * 
 * Agricultural intelligence MCP server with soil analysis, crop recommendations,
 * weather forecasts, and environmental impact assessment.
 * 
 * Features:
 * - Soil analysis and recommendations
 * - Crop suitability scoring
 * - Weather forecasting for agriculture
 * - Environmental impact assessment
 * - TurboQuant capabilities checking (FREE)
 * - Anonymous usage analytics (opt-out available)
 * 
 * API Documentation: https://app.soilsidekickpro.com/api-docs
 * MCP Documentation: https://app.soilsidekickpro.com/mcp
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";

// MCP Server implementation
const server = new Server(
  {
    name: "leafengines",
    version: "2.0.7",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Telemetry ingestion (anonymous, opt-out available via NO_ANALYTICS=1)
const TELEMETRY_INGEST_ENDPOINT = "https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/telemetry-ingest";
const TELEMETRY_ANALYTICS_ENDPOINT = "https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/analytics";
const ENABLE_ANALYTICS = process.env.NO_ANALYTICS !== "1";

// Send telemetry event to the new ingestion pipeline (includes downstream digest emails)
async function sendTelemetryEvent(event: {
  surface?: string;
  event_type?: string;
  tool_name?: string;
  latency_ms?: number;
  status_code?: number;
  api_key_prefix?: string | null;
  metadata?: Record<string, unknown>;
  error_message?: string | null;
  error_stack?: string | null;
}) {
  if (!ENABLE_ANALYTICS) return;

  try {
    await axios.post(
      TELEMETRY_INGEST_ENDPOINT,
      {
        ...event,
        surface: event.surface ?? "mcp",
        event_type: event.event_type ?? "tool_call",
      },
      {
        timeout: 1000, // Don't block on telemetry
        headers: {
          "x-surface": event.surface ?? "mcp",
          "x-client-version": "2.0.7",
        },
      }
    );
  } catch (error) {
    // Silently fail - telemetry should not affect functionality
  }
}

// Legacy analytics tracking (kept as fallback for backward compat, may be dead endpoint)
async function trackToolUsage(toolName: string) {
  if (!ENABLE_ANALYTICS) return;

  try {
    await axios.post(
      TELEMETRY_ANALYTICS_ENDPOINT,
      {
        event: "tool_used",
        tool: toolName,
        version: "2.0.7",
        timestamp: new Date().toISOString(),
        anonymous_id: `mcp_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
      },
      {
        timeout: 1000, // Don't block on analytics
      }
    );
  } catch (error) {
    // Silently fail - analytics should not affect functionality
  }
}

// Community engagement message (shown on first run)
function getCommunityMessage() {
  return `🌱 Welcome to LeafEngines MCP Server (v2.0.7)!

Join 750+ developers in our community:
• GitHub Discussions: https://github.com/QWarranto/leafengines-claude-mcp/discussions
• Upcoming Tutorial Videos: Agricultural AI MCP tips
• Twitter: @LeafEnginesAI for updates

Share your use case: What are you building with agricultural AI?`;
}

// Configuration
const MCP_SERVER_URL = "https://wzgnxkoeqzvueypwzvyn.supabase.co/functions/v1/mcp-server";

// Helper function to call LeafEngines API
async function callLeafEnginesAPI(toolName: string, arguments_: any, apiKey?: string, isFreeTool: boolean = false) {
  try {
    const headers: any = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    if (apiKey) {
      headers["x-api-key"] = apiKey;
    }

    // Add x-free-tier header for free tools
    if (isFreeTool) {
      headers["x-free-tier"] = "true";
    }

    const response = await axios.post(
      MCP_SERVER_URL,
      {
        jsonrpc: "2.0",
        method: "tools/call",
        params: {
          name: toolName,
          arguments: arguments_,
        },
        id: 1,
      },
      {
        headers,
        timeout: 30000,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(`LeafEngines API call failed: ${error.message}`);
    throw error;
  }
}

// Tool: TurboQuant Capabilities (FREE - no API key required)
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_soil_data",
        description: "COMMODITIZED TIER ($0.001/call): Get USDA SSURGO soil analysis for any US county. Returns pH, nutrients, organic matter, drainage, and texture. Perfect for Claude when you need: agricultural planning, environmental assessments, land evaluation, or basic soil composition data. Optional: county_name and state_code (helpful if you have them from county_lookup).",
        inputSchema: {
          type: "object",
          properties: {
            county_fips: {
              type: "string",
              pattern: "^[0-9]{5}$",
              description: "5-digit US county FIPS code"
            },
            county_name: {
              type: "string",
              description: "County name (optional, but recommended with state_code)"
            },
            state_code: {
              type: "string",
              pattern: "^[A-Z]{2}$",
              description: "2-letter state code (optional, but recommended with county_name)"
            }
          },
          required: ["county_fips"]
        }
      },
      {
        name: "county_lookup",
        description: "COMMODITIZED TIER ($0.001/call): Resolve US location names to FIPS codes. Search by county name, state, or FIPS code. Returns county details needed for other LeafEngines tools.",
        inputSchema: {
          type: "object",
          properties: {
            term: {
              type: "string",
              minLength: 2,
              maxLength: 100,
              description: "Search term — county name, state name, or partial FIPS code"
            }
          },
          required: ["term"]
        }
      },
      {
        name: "agricultural_intelligence",
        description: "ENHANCED TIER ($0.003/call): AI-powered agricultural insights combining soil, climate, and crop science. Get planting recommendations, yield predictions, risk assessments, and sustainability scores.",
        inputSchema: {
          type: "object",
          properties: {
            county_fips: {
              type: "string",
              pattern: "^[0-9]{5}$",
              description: "5-digit US county FIPS code"
            },
            crop_type: {
              type: "string",
              description: "Crop to analyze"
            },
            question: {
              type: "string",
              description: "Specific agricultural question to answer"
            }
          },
          required: ["county_fips"]
        }
      },
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // Track tool usage (anonymous analytics)
  trackToolUsage(name);

  // Get API key from environment variable
  const apiKey = process.env.LEAFENGINES_API_KEY;

const freeTools = ['county_lookup', 'get_soil_data'];

  // Free tools: county_lookup and get_soil_data available without API key
  if (!apiKey && !freeTools.includes(name)) {
    // Telemetry the paywall hit
    sendTelemetryEvent({
      surface: "mcp",
      event_type: "tool_call",
      tool_name: `${name}:paywall`,
      status_code: 402,
      api_key_prefix: apiKey ? apiKey.slice(0, 8) : null,
      metadata: { tier: "paywall", free_tools_available: freeTools },
    });
    
    trackToolUsage(`${name}:paywall`);
    return {
      content: [
        {
          type: "text",
          text: `API key required for ${name}. Free tools available without key: county_lookup, get_soil_data.\n\nGet full access:\n• Starter ($10/mo → $49/mo lifetime): https://buy.stripe.com/14A7sL30y8bR2F4fbgaMU02\n• Pro ($49/mo → $149/mo lifetime): https://buy.stripe.com/cNi3cv1WuajZcfE7IOaMU03\n\nFounder pricing — first 100 only.`,
        },
      ],
      isError: true,
    };
  }

  try {
    const startMs = Date.now();
    const isFreeTool = freeTools.includes(name);
    const result = await callLeafEnginesAPI(name, args, apiKey, isFreeTool);
    const latencyMs = Date.now() - startMs;

    // Telemetry: successful tool call
    sendTelemetryEvent({
      surface: "mcp",
      event_type: "tool_call",
      tool_name: name,
      latency_ms: latencyMs,
      status_code: 200,
      api_key_prefix: apiKey ? apiKey.slice(0, 8) : null,
      metadata: {
        success: true,
        is_free: isFreeTool,
        has_result: !!result,
      },
    });

    trackToolUsage(name);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  } catch (error: any) {
    const status = error.response?.status ?? 0;

    // Telemetry: error event
    sendTelemetryEvent({
      surface: "mcp",
      event_type: "error",
      tool_name: name,
      status_code: status,
      api_key_prefix: apiKey ? apiKey.slice(0, 8) : null,
      error_message: error.message?.slice(0, 1000) ?? null,
      metadata: {
        error_type: error.code ?? "unknown",
        has_response: !!error.response,
      },
    });

    trackToolUsage(`${name}:error`);
    if (error.response?.status === 401) {
      return {
        content: [
          {
            type: "text",
            text: `Authentication failed for ${name}. Please check your API key. Get API key from: https://app.soilsidekickpro.com/api-docs`,
          },
        ],
        isError: true,
      };
    }

    return {
      content: [
        {
          type: "text",
          text: `Error calling ${name}: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

// Error handling
server.onerror = (error) => {
  console.error("[MCP Server Error]", error);
};

// Connection handling
process.on("SIGINT", async () => {
  await server.close();
  process.exit(0);
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("LeafEngines MCP server running on stdio");
}

main().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});