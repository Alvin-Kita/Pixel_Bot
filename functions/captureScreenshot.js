const { urlP1, urlP2 } = require('./../config.json');
const puppeteer = require('puppeteer');
const { getDate } = require('./../functions/getDate');

async function captureScreenshot(prenom, nom, date) {
    //Récuppération de la date
    if (date === undefined) {
        date = getDate();
    }
    
    // Récupération de la page
    const browser = await puppeteer.launch({
        headless: 'new', // --- Nouvelle fonctionalitées à regarder...
    });

    const page = await browser.newPage();
    
    await page.goto(`${urlP1}${prenom}.${nom}&date=${date}${urlP2}`);

    const screenshot = await page.screenshot();
        await browser.close();

        return screenshot;
}

module.exports = {
    captureScreenshot,
};
