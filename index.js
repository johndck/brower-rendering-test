import 'dotenv/config';
import Cloudflare from 'cloudflare';
import debugWithScreenshot from './testScreenShot.js';




const client = new Cloudflare({
  apiToken: process.env.CLOUDFLARE_API_TOKEN,
});

debugWithScreenshot(client, 'https://standardlife.com');    


/** 
async function extractMarkdown(targetUrl) {
  try {
    console.log(`🚀 Rendering ${targetUrl}...`);

    const response = await client.browserRendering.markdown.create({
      account_id: process.env.CLOUDFLARE_ACCOUNT_ID,
      url: targetUrl,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      gotoOptions: {
        // 2. Stop waiting once the main text is there (prevents 422 timeouts)
        waitUntil: 'domcontentloaded',
        timeout: 45000 
      }
      // Optional: Wait for a specific element to ensure dynamic content loads
      // waitForSelector: 'article', 
    });

    // The response object contains the Markdown in the 'result' field
    console.log('--- Extracted Markdown ---');
    console.log(response.result);
    
    return response.result;
  } catch (error) {
    console.error('❌ Extraction failed:', error.message);
  }
}

extractMarkdown('https://standardlife.com');

*/