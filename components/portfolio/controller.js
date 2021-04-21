const { slugToTitle } = require('../../helpers/decode-slug');
const { finishPromiseExecution } = require('../../helpers/promise');
const store = require('./store');

const puppeteer = require('puppeteer');

process.setMaxListeners(Infinity);

const DESKTOP_SETTINGS = {
    width: 1366,
    height: 629
};

const MOBILE_SETTINGS = {
    width: 500,
    height: 800
};

const takeScreenshot = async (forMobile) => {
    return await list().then((data) => {
        data.forEach(async (item) => {
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();

                await page.setDefaultNavigationTimeout(0);

                await page.setViewport(forMobile ? MOBILE_SETTINGS : DESKTOP_SETTINGS);
                await page.goto(item.link, {
                    waitUntil: 'networkidle0',
                });
                await page.screenshot({ path: `public/gallery/${item.title}${forMobile ? "-mobile" : ""}.png` });
                await page.close();
                await browser.close();

                console.log("Took screenshot for: " + item.title);
            } catch (error) {
                console.error(error);
            }

        })
    });
}

const list = () => {
    return new Promise((resolve, reject) => {
        finishPromiseExecution(store.getAll(), resolve, reject);
    })
};

const getBySlug = (slug) => {
    const title = slugToTitle(slug);
    return new Promise((resolve, reject) => {
        finishPromiseExecution(store.getOneByName(title), resolve, reject, true);
    })
};

module.exports = {
    list,
    getBySlug,
    takeScreenshot
};