/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 */

// usage:
// node screenshot.js

'use strict';

const puppeteer = require('puppeteer');

(async() => {
    const TARGET_URL = 'https://yahoo.co.jp';
    // Macだとsafari
    // const browser = await puppeteer.launch();
    // Chromeを指定
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();
    await page.goto(TARGET_URL);
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();