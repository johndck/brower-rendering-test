import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs';
const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

async function runTest() {
    console.log("🚀 Running Scrape Test...");
  
    // Scrape a single URL (Standard Life)
    const scrapeResponse = await app.scrape('https://justretirement.co.uk', {
      formats: ['markdown', 'screenshot'],
      waitFor: 5000 // Crucial for letting Cloudflare challenges resolve
    });
  
    console.log("Scrape Result:", scrapeResponse);
  
    // If it's successful, you can save the screenshot
    if (scrapeResponse.success && scrapeResponse.screenshot) {
       // If the screenshot is a base64 string, save it
       if (!scrapeResponse.screenshot.startsWith('http')) {
         fs.writeFileSync('bypass_test.png', scrapeResponse.screenshot, 'base64');
         console.log("✅ Screenshot saved to bypass_test.png");
       }
    }
  
    /* // Crawl is better for mapping many pages
    console.log("🚀 Running Crawl Test...");
    const crawlResponse = await app.crawlUrl('https://www.standardlife.co.uk', {
      limit: 5,
      scrapeOptions: {
        formats: ['markdown'],
      }
    });
    console.log("Crawl Result:", crawlResponse);
    */
  }

export default runTest;