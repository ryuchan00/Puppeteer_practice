const puppeteer = require('puppeteer');

require('dotenv').config();

const USER_ID = process.env.MY_USER_ID;
const PASSWORD = process.env.MY_PASSWORD;

function nowtime(){
    let d = new Date();
    let year = d.getYear()+1900;
    let month = d.getMonth()+1;
    let date = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    d = year + "年" + month + "月" + date + "日" + hour + "時" + minute + "分"+ second + "秒でーす";
    return d;
}

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

    await page.goto('https://twitter.com/login');

    // ユーザーIDを入力する
    await page.type('input.js-username-field', USER_ID);
    // パスワードを入力する
    await page.type('input.js-password-field', PASSWORD);

    // ログインボタンをクリックする
    await page.click('button[type="submit"]');

    await page.goto('https://twitter.com/');
    await page.waitFor(3000);
    await page.click('button#global-new-tweet-button');
    await page.waitFor(3000);
    await page.keyboard.type(nowtime());
    await page.waitFor(3000);
    await page.click('button.js-send-tweets');

    // ブラウザの終了
    await browser.close();
})();
