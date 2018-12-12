const puppeteer = require('puppeteer');

require('dotenv').config();

const USER_ID = process.env.AOZORA_USER_ID;
const PASSWORD = process.env.AOZORA_PASSWORD;

//メインロジック
(async() => {
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

    await page.goto('https://sso.gmo-aozora.com/b2c/login');

    // ユーザーIDを入力する
    await page.type('input[name="username"]', USER_ID);
    // パスワードを入力する
    await page.type('input[name="password"]', PASSWORD);

    // ログインボタンをクリックする
    await page.click('button[type="submit"]');

    // a = document.querySelector('span.amount span')
    // a.textContent // 0

    await page.waitFor(6000);

    // 要素の取得
    const amount = await page.evaluate((selector) => {
        // evaluate関数に渡す第一引数のfunctionは、
        // 第二引数として渡したパラメータをselectorに引き継いでブラウザ内で実行する
        return document.querySelector(selector).textContent;

    }, 'span.amount span');

    console.log('残高:' + amount);

    // ブラウザの終了
    await browser.close();
})();
