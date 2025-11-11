# NewsPK - Pakistan News Scraper

A lightweight TypeScript-based Node.js library for fetching the latest news articles from Pakistani news sources (Dawn News). Supports both **English** and **Urdu** languages.

## Installation

```bash
npm install newspk
```

## Quick Start

### TypeScript
```typescript
import { news } from 'newspk';

const articles = await news(5, 'english');
console.log(articles);
```

### JavaScript
```javascript
const { news } = require('newspk');

const articles = await news(5, 'english');
console.log(articles);
```

## API Reference

### `news(limit?: number, lang?: Language): Promise<NewsArticle[]>`

Fetches latest news articles from Dawn News.

**Parameters:**
- `limit` (number, default: 5) - Number of articles to fetch (max: 15)
- `lang` (string, default: 'urdu') - Language: 'english' or 'urdu'

**Returns:** Array of `NewsArticle` objects

**Example:**
```typescript
const articles = await news(10, 'english');
```

### NewsArticle Type
```typescript
interface NewsArticle {
  title: string;          // Article headline
  thumbnail: string;      // Thumbnail image URL
  body: string;           // Article content
  unique_id: string;      // Unique identifier
  created_at: string;     // Publication timestamp
}
```

## Express API Server

```bash
cd express
npm install
npm run build
npm start
```

Server runs on `http://localhost:8080`

**Endpoints:**
- `GET /` - API documentation
- `GET /health` - Health check
- `GET /api?limit=10&lang=english` - Fetch news

## Build Commands

```bash
npm run build      # Compile TypeScript
npm run dev        # Watch mode
npm run clean      # Remove build output
```

## License

MIT - See [LICENSE](LICENSE) file

**Made by Mazan Labeeb**

---

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [API Reference](#-api-reference)
- [Usage Examples](#-usage-examples)
- [Advanced Usage](#-advanced-usage)
- [Express API Server](#-express-api-server)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🚀 **TypeScript Support** - Fully typed for better IDE experience and type safety
- 📰 **Multi-Language** - Supports both English and Urdu news articles
- 🪶 **Lightweight** - Minimal dependencies (jsdom, node-fetch, striptags)
- 🔄 **Async/Await** - Modern async API
- 📱 **Express Integration** - Ready-to-use REST API server included
- 📚 **Well-Documented** - Comprehensive JSDoc comments and examples
- ✅ **Error Handling** - Robust error handling and validation
- 🎯 **Simple API** - Easy-to-use interface for fetching news

---

## 📦 Installation

### Prerequisites
- Node.js 14 or higher
- npm or yarn

### Via npm

```bash
npm install newspk
```

### Via yarn

```bash
yarn add newspk
```

### From Source

```bash
git clone https://github.com/MazanLabeeb/newspk.git
cd newspk
npm install
npm run build
```

---

## 🚀 Quick Start

### TypeScript

```typescript
import { news } from 'newspk';

// Fetch 5 English news articles
async function getLatestNews() {
  try {
    const articles = await news(5, 'english');
    console.log(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

getLatestNews();
```

### JavaScript (CommonJS)

```javascript
const { news } = require('newspk');

async function getLatestNews() {
  try {
    const articles = await news(5, 'english');
    console.log(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

getLatestNews();
```

---

## 📖 API Reference

### `news(limit?: number, lang?: Language): Promise<NewsArticle[]>`

Fetches latest news articles from Dawn News.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | `number` | `5` | Number of articles to fetch. Maximum: 15 |
| `lang` | `'english' \| 'urdu'` | `'urdu'` | Language of the news articles |

#### Returns

`Promise<NewsArticle[]>` - An array of news articles

#### Throws

- `Error` - If the page cannot be fetched or parsed

#### Example

```typescript
const articles = await news(10, 'english');
```

---

### Data Types

#### `NewsArticle`

Represents a single news article.

```typescript
interface NewsArticle {
  title: string;          // The headline of the article
  thumbnail: string;      // URL of the thumbnail image
  body: string;           // The main article content
  unique_id: string;      // Unique identifier for the article
  created_at: string;     // Publication timestamp
}
```

---

## 💡 Basic Usage Example

```typescript
import { news } from 'newspk';

(async () => {
  try {
    const articles = await news(5, 'english');
    
    articles.forEach((article) => {
      console.log(`Title: ${article.title}`);
      console.log(`Published: ${article.created_at}`);
      console.log(`Body Preview: ${article.body.substring(0, 100)}...\n`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

---

## 🌐 Express API Server

An Express.js-based REST API server is included in the `express/` directory.

### Running the Express Server

```bash
cd express
npm install
npm run build
npm start
```

### API Endpoints

**GET `/api`** - Fetch news articles

Query Parameters:
- `limit` (optional): Number of articles (default: 5, max: 15)
- `lang` (optional): Language - 'english' or 'urdu' (default: 'english')

```bash
# Fetch 10 English articles
curl "http://localhost:8080/api?limit=10&lang=english"

# Fetch 8 Urdu articles
curl "http://localhost:8080/api?limit=8&lang=urdu"
```

---

## 📁 Project Structure

```
newspk/
├── src/                  # TypeScript source code
│   ├── index.ts         # Main entry point
│   ├── scraper.ts       # Core scraping logic
│   └── types.ts         # Type definitions
├── dist/                # Compiled JavaScript
├── express/             # Express API server
│   ├── index.ts
│   └── view/
│       ├── index.html
│       └── 404.html
├── example.ts           # Usage example
├── README.md            # This file
├── CONTRIBUTING.md      # Contribution guidelines
├── CHANGELOG.md         # Version history
└── LICENSE              # MIT License
```

---

## 🔨 Building from Source

```bash
# Build the library
npm run build

# Development mode (watch for changes)
npm run dev

# Clean build
npm run clean
```

---

## 📝 Documentation

- **[README.md](README.md)** - This file
- **[DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)** - For developers
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
- **[CHANGELOG.md](CHANGELOG.md)** - Version history
- **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** - Community guidelines

---

## 🐛 Troubleshooting

### Issue: Cannot find module 'newspk'
```bash
npm install newspk
```

### Issue: Connection timeout
- Try reducing the `limit` parameter
- Check your internet connection
- Retry after a few moments

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- [GitHub Repository](https://github.com/MazanLabeeb/newspk)
- [npm Package](https://www.npmjs.com/package/newspk)

---

**Made with ❤️ by Mazan Labeeb**
