import { news, type NewsArticle } from './src/index';

/**
 * Example usage of the newspk library
 * This script demonstrates how to fetch news articles
 */
const runExample = async (): Promise<void> => {
  try {
    console.log('📰 Fetching latest news articles...\n');

    // Example 1: Fetch 5 English news articles
    console.log('=== Fetching 5 English Articles ===');
    const englishNews = await news(5, 'english');
    console.log(`Found ${englishNews.length} articles\n`);
    englishNews.forEach((article: NewsArticle, index: number) => {
      console.log(`Article ${index + 1}: ${article.title}`);
      console.log(`ID: ${article.unique_id}`);
      console.log(`Date: ${article.created_at}\n`);
    });

    // Example 2: Fetch 3 Urdu news articles
    console.log('\n=== Fetching 3 Urdu Articles ===');
    const urduNews = await news(3, 'urdu');
    console.log(`Found ${urduNews.length} articles\n`);
    urduNews.forEach((article: NewsArticle, index: number) => {
      console.log(`Article ${index + 1}: ${article.title}`);
      console.log(`ID: ${article.unique_id}`);
      console.log(`Date: ${article.created_at}\n`);
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    process.exit(1);
  }
};

// Run the example
runExample();
