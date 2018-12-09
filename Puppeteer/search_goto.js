// urlを指定してgotoする
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

    console.log('---next url');
    const nextUrl = await page.evaluate(() =>
        document.querySelector('#topicsfb .topicsindex ul.emphasis li:nth-child(1) a').href);
    console.log(nextUrl);

    console.log('---goto');
    await page.goto(nextUrl);

    console.log('---evaluate');
    const h2Title = await page.evaluate(() => document.querySelector('h2.newsTitle').textContent);

    console.log(h2Title);

    // ブラウザの終了
    await browser.close();
})();
