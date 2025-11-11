/**
 * Represents a single news article with all its details
 */
export interface NewsArticle {
  /** The headline/title of the news article */
  title: string;
  /** URL of the thumbnail image for the article */
  thumbnail: string;
  /** The main body text of the article */
  body: string;
  /** Unique identifier for the article */
  unique_id: string;
  /** Timestamp when the article was published */
  created_at: string;
}

/**
 * Language options for fetching news
 */
export type Language = 'english' | 'urdu';

/**
 * Configuration options for news fetching
 */
export interface NewsOptions {
  /** Number of articles to fetch (max 15) */
  limit?: number;
  /** Language for fetching news */
  lang?: Language;
}
