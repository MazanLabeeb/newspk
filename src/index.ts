/**
 * NewsPK - Pakistan News Scraper Library
 *
 * A lightweight Node.js library for fetching the latest news from Pakistani news sources.
 * Supports both English and Urdu languages.
 *
 * @packageDocumentation
 */

import { fetchNews } from './scraper';
import { NewsArticle, Language, NewsOptions } from './types';

/**
 * Fetches latest news articles with optional parameters
 *
 * @param limit - Number of articles to fetch (default: 5, max: 15)
 * @param lang - Language for news articles ('english' or 'urdu') (default: 'urdu')
 * @returns Promise resolving to an array of news articles
 *
 * @example
 * ```typescript
 * import { news } from 'newspk';
 *
 * // Fetch 5 English news articles
 * const articles = await news(5, 'english');
 * console.log(articles);
 * ```
 *
 * @throws Error if news cannot be fetched or parsed
 */
export const news = async (
  limit: number = 5,
  lang: Language = 'urdu'
): Promise<NewsArticle[]> => {
  return fetchNews(limit, lang);
};

// Export types for TypeScript users
export type { NewsArticle, Language, NewsOptions };
export { fetchNews };

// CommonJS compatibility export
module.exports = {
  news,
  fetchNews,
};
