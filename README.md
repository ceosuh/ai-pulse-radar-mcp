# AI Pulse Radar MCP Server

A Node.js **Model Context Protocol (MCP)** server implemented with `@modelcontextprotocol/sdk` (`index.js`) that aggregates real-time tech trends and sentiment from **Google News, Reddit, and HackerNews**.

## Architecture

This repository contains a standalone stdio MCP server (`index.js`) that:
- Registers the `get_ai_pulse_radar` tool via `ListToolsRequestSchema`
- Handles tool execution via `CallToolRequestSchema` using the official MCP TypeScript/Node SDK
- Fetches aggregated real-time sentiment datasets via an authenticated backend data pipeline (`APIFY_TOKEN`)

## Tool Provided

### `get_ai_pulse_radar`
Fetches real-time news, community discussions, and sentiment signals across Google News, Reddit, and HackerNews.

**Parameters:**
- `keywords` (`string[]`, required): Topics or brands to track (e.g., `["AI", "LLM", "MCP"]`)
- `maxResultsPerSource` (`number`, optional): Max items per source (default: `5`)

## Installation & Usage

```bash
git clone [https://github.com/ceosuh/ai-pulse-radar-mcp.git](https://github.com/ceosuh/ai-pulse-radar-mcp.git)
cd ai-pulse-radar-mcp
npm install
```

### Claude Desktop / Cursor Configuration

```json
{
  "mcpServers": {
    "ai-pulse-radar-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/ai-pulse-radar-mcp/index.js"],
      "env": {
        "APIFY_TOKEN": "your-api-token"
      }
    }
  }
}
```

## License

MIT
