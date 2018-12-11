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
    // googleのWebページにアクセス
    await page.goto('https://www.google.co.jp/');

    // 検索窓のテキストボックスに「Puppeteer」を入力
    await page.type("input[name=q]", 'Puppeteer');

    // 検索ボタンをクリック
    await page.click('input[name="btnK"]')

    // ブラウザの終了
    // await browser.close();
})();
