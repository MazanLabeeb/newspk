## NewsPK - Pakistan News Scraper

A lightweight TypeScript-based Node.js library for fetching the latest news articles from Pakistani news sources (Dawn News). Supports both **English** and **Urdu** languages.

## Installation

```bash
npm install newspk
```

## Quick Start

```typescript
import { news } from 'newspk';

const articles = await news(5, 'english');
console.log(articles);
```

## Build & Run

Build the library and run examples:

```bash
npm install
npm run build      # Compile TypeScript
npm run dev        # Watch mode (development)
npm run clean      # Remove build output
```

Run the example (uses ts-node):

```bash
npm run example
```

## API Reference

### `news(limit?: number, lang?: Language): Promise<NewsArticle[]>`

Fetches latest news articles from Dawn News.

**Parameters:**
- `limit` (number, default: 5) - Number of articles to fetch (max: 15)
- `lang` (string, default: 'urdu') - Language: 'english' or 'urdu'

**Returns:** Array of `NewsArticle` objects

## License

MIT - See [LICENSE](LICENSE) file

**Made by Mazan Labeeb**
