const puppeteer = require('puppeteer');

//メインロジック
(async () => {
// Puppeteerの起動
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
    });

    // 新しいからのページを開く
    const page = await browser.newPage();

    // view portの設定
    await page.setViewport({
        width: 1200,
        height: 800,
    });

    await page.goto('https://connpass.com/');
    // 検索窓に「Puppeteer」と入力
    await page.type('textarea[name=feedback]', 'テキストエリアへの入力サンプルです。');

    // ブラウザの終了
    // await browser.close();
})();
