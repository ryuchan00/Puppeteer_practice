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

    console.log('---goto');
    // Yahoo!のトップページへ遷移し、ロードが完了するまで待つ
    await page.goto('https://www.yahoo.co.jp/');

    console.log('---wait and click');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'load'}),
        // buttonタグを特定してクリックする
        await page.click('#topicsfb .topicsindex ul.emphasis li:nth-child(1) a'),
    ]);

    console.log('---evaluate');
    const h2Title = await page.evaluate(() => document.querySelector('h2.newsTitle').textContent);

    console.log('h2Title');

    // ブラウザの終了
    // 表示確認のため、手動でクローズする
    // await browser.close();
})();
