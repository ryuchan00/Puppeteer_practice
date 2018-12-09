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

    // Yahoo!のトップページへ遷移し、ロードが完了するまで待つ
    await page.goto('https://www.yahoo.co.jp/', {waitUntil: 'load'});

    // 検索窓にPuppeteerと入力する
    await page.type('input[name="p"]', 'Puppeteer');

    // buttonタグを特定してクリックする
    await page.click('#srchbtn');

    // ブラウザの終了
    // 表示確認のため、手動でクローズする
    // await browser.close();
})();
