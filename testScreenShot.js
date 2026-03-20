async function debugWithScreenshot(client,targetUrl) {
    try {
      console.log(`📸 Capturing visual of ${targetUrl}...`);
      const response = await client.browserRendering.screenshot.create({
        account_id: process.env.CLOUDFLARE_ACCOUNT_ID,
        url: targetUrl,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        // We use a shorter timeout here because we just want to see the block
        gotoOptions: { waitUntil: 'networkidle2',
            timeout: 60000 } 
      });
  
      const fs = await import('fs');
      const buffer = Buffer.from(response.result, 'base64');
        fs.writeFileSync('stealth_test_screenshot.png', buffer);
      
      console.log('✅ Screenshot saved to stealth_test_screenshot.png');
    } catch (error) {
      console.error('❌ Screenshot failed:', error.message);
    }
  }

  export default debugWithScreenshot;