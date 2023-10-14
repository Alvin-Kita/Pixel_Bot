const { urlP1, urlP2 } = require('./../config.json');
const puppeteer = require('puppeteer');

async function captureScreenshot(prenom, nom) {
    const browser = await puppeteer.launch({
        headless: 'new', // --- Nouvelle fonctionalitées à regarder...
    });

    const page = await browser.newPage();
    
    await page.goto(urlP1 + prenom + '.' + nom + urlP2);

    const screenshot = await page.screenshot();
        await browser.close();

        return screenshot;
}

module.exports = {
    captureScreenshot,
};
