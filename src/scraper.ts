import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import striptags from 'striptags';
import { NewsArticle, Language } from './types';

/**
 * Fetches the full article content from a given URL
 * @param url - The URL of the article to fetch
 * @returns Promise resolving to the article body text
 * @throws Error if the article content cannot be fetched or parsed
 */
const getNewsContent = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const body = await response.text();
    const dom = new JSDOM(body);
    const contentElement = dom.window.document.querySelector('.story__content');

    if (!contentElement) {
      throw new Error('Content element not found on page');
    }

    let articleContent = '';
    for (let i = 0; i < contentElement.children.length; i++) {
      if (contentElement.children[i].tagName === 'P') {
        const childElement = contentElement.children[i] as HTMLElement;
        articleContent += striptags(childElement.innerHTML.trim());
      }
    }
    return articleContent;
  } catch (error) {
    console.error(`Error fetching news content from ${url}:`, error);
    throw error;
  }
};

/**
 * Fetches latest news articles from Dawn News website
 * @param limit - Number of articles to fetch (default: 5, max: 15)
 * @param lang - Language for news ('english' or 'urdu') (default: 'urdu')
 * @returns Promise resolving to an array of news articles
 * @throws Error if the page cannot be fetched or parsed
 */
export const fetchNews = async (
  limit: number = 5,
  lang: Language = 'urdu'
): Promise<NewsArticle[]> => {
  try {
    // Validate input
    const validLimit = Math.min(Math.max(limit, 1), 15);
    const newsUrl =
      lang.toLowerCase() === 'urdu'
        ? 'https://www.dawnnews.tv/latest-news'
        : 'https://www.dawn.com/latest-news';

    // Fetch the main page
    const response = await fetch(newsUrl);
    const body = await response.text();
    const dom = new JSDOM(body);

    // Extract article elements
    const storyLinks = dom.window.document.getElementsByClassName('story__link');
    const mediaItems = dom.window.document.getElementsByClassName('media__item');
    const timestamps = dom.window.document.getElementsByClassName('timeago');

    const articles: NewsArticle[] = [];

    // Process each article
    for (let i = 0; i < validLimit && i < mediaItems.length; i++) {
      try {
        const mediaItem = mediaItems[i] as any;
        const firstChild = mediaItem.firstChild as any;
        const articleUrl = firstChild.href;

        // Extract unique ID from URL
        const uniqueId = articleUrl.split('/')[4] || `article_${i}`;

        // Fetch article content
        const articleBody = await getNewsContent(articleUrl);

        // Extract article data
        const storyLink = storyLinks[i] as HTMLElement;
        const imgElement = firstChild.firstChild?.firstChild as any;

        articles.push({
          title: storyLink.innerHTML.trim(),
          thumbnail: imgElement?.src || '',
          body: articleBody,
          unique_id: uniqueId,
          created_at: (timestamps[i] as any)?.title || new Date().toISOString(),
        });
      } catch (error) {
        console.warn(`Error processing article at index ${i}:`, error);
        continue;
      }
    }

    return articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
