async function debugWithScreenshot(client,targetUrl) {
    try {
      console.log(`📸 Capturing visual of ${targetUrl}...`);
      const response = await client.browserRendering.screenshot.create({
        account_id: process.env.CLOUDFLARE_ACCOUNT_ID,
        url: targetUrl,
        stealth: true, // 2026 feature to mask headless signals
        // We use a shorter timeout here because we just want to see the block
        gotoOptions: { waitUntil: 'commit',
            timeout: 45000 } 
      });
  
      const fs = await import('fs');
      const buffer = Buffer.from(response.result, 'base64');
        fs.writeFileSync('stealth_test_screenshot.png', buffer);
      
      console.log('✅ Screenshot saved to stealth_test.png');
    } catch (error) {
      console.error('❌ Screenshot failed:', error.message);
    }
  }

  export default debugWithScreenshot;