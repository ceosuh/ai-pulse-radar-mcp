# ai-pulse-radar-mcp
Building ultra-fast, zero-bloat data pipelines and MCP-ready Actors for AI agents. Official API &amp; RSS aggregation at 50% lower PPE cost.
# 🌐 AI Pulse Radar: Google News, Reddit & HackerNews Real-Time Aggregator (MCP Ready)

Fetch real-time media coverage and raw community sentiment for **any keyword** across **Google News (Multi-region RSS)**, **Reddit**, and **Hacker News** in a single API call — at **50% lower cost** than standalone scrapers.

Designed specifically for **AI Agents (Claude, Cursor, Windsurf, OpenAI MCP)**, market researchers, and automated newsletter pipelines.

---

## ⚡ Output Sample (AI-Ready JSON)

Every item includes a pre-formatted `aiSummaryContext` field so your LLM can immediately analyze sentiment without wasting tokens on HTML parsing:

```json
{
  "sourcePlatform": "Google News",
  "query": "AI agent",
  "title": "Why Enterprise AI Agents Are Shifting to Pay-Per-Event APIs - TechCrunch",
  "authorOrPublisher": "TechCrunch",
  "url": "[https://news.google.com/rss/articles/](https://news.google.com/rss/articles/)...",
  "publisherDomain": "[https://techcrunch.com](https://techcrunch.com)",
  "publishedAt": "2026-11-13T02:15:00.000Z",
  "upvotesOrScore": null,
  "commentCount": null,
  "engagementLevel": "Media Coverage",
  "aiSummaryContext": "[News Article from TechCrunch] Title: \"Why Enterprise AI Agents Are Shifting to Pay-Per-Event APIs - TechCrunch\"",
  "scrapedAt": "2026-11-13T03:00:00.000Z"
}
```

---

## 💰 Why Switch to This Tollgate?

* **3-in-1 Aggregation:** Stop paying for three separate scrapers. Get mainstream news (`Google News`) + grassroot user opinions (`Reddit` & `Hacker News`) in one unified dataset.
* **Multi-Language Support:** Track global trends in English (`US_en`, `GB_en`), Korean (`KR_ko`), or Japanese (`JP_ja`).
* **Ultra-Low PPE Pricing:** Pay only per extracted item (`item-scraped`). No monthly subscription or proxy overhead.

---

## 🤖 Connect to Claude / Cursor (MCP Server)

```json
{
  "mcpServers": {
    "ai-pulse-radar": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--actors",
        "ceosuh/ai-pulse-radar-mcp"
      ],
      "env": {
        "APIFY_TOKEN": "your-apify-api-token"
      }
    }
  }
}
```
