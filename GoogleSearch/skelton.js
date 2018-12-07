const puppeteer = require('puppeteer');

(async() => {
    // Puppeteerの起動
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50
    });

    // 新しい空のページを開く
    const page = await browser.newPage();

    // view portの設定
    await page.setViewport({width: 1200, height: 800});

    await page.goto('http://www.google.co.jp/');

    // ブラウザを終了
    await browser.close();
})();

