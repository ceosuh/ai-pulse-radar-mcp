#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = "ceosuh~ai-pulse-radar-mcp";

const server = new Server(
  { name: "ai-pulse-radar-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "fetch_global_news_and_community_pulse",
      description: "Fetch real-time news and community sentiment across Google News RSS, Reddit, and Hacker News.",
      inputSchema: {
        type: "object",
        properties: {
          keywords: {
            type: "array",
            items: { type: "string" },
            description: "Keywords to search (e.g., ['AI agents', 'Bitcoin'])"
          },
          maxItemsPerSource: {
            type: "number",
            description: "Max items per platform (default: 10)",
            default: 10
          },
          language: {
            type: "string",
            description: "Google News language code (e.g., 'en-US', 'ko')",
            default: "en-US"
          }
        },
        required: ["keywords"]
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "fetch_global_news_and_community_pulse") {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }
  if (!APIFY_TOKEN) {
    throw new Error("Missing APIFY_TOKEN environment variable.");
  }

  const response = await fetch(
    `https://api.apify.com/v2/acts/${ACTOR_ID}/run-sync-get-dataset-items?token=${APIFY_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request.params.arguments || {})
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Apify API error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }]
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
