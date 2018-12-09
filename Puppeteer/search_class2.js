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

    // 秀和システムのページへ遷移
    await page.goto('https://www.shuwasystem.co.jp/');

    // id='newbook'の要素の表示を待つ
    await page.waitFor('#head_news .main-article:nth-child(3)');

    // 要素の取得
    const newBook = await page.evaluate((selector) => {
        // evaluate関数に渡す第一引数のfunctionは、
        // 第二引数として渡したパラメータをselectorに引き継いでブラウザ内で実行する
        return document.querySelector(selector).innerHTML;

    }, '#head_news');

    console.log(newBook);

    // ブラウザの終了
    await browser.close();
})();
