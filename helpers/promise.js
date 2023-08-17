const { formatEntry } = require("../contentful/utils");
const config = require("./../config");

const finishPromiseExecution = (promise, resolve, reject, addScreenshots = false, hasImages = true) => {
    const imagesArray = hasImages ? ['preview'] : [];
    
    promise.then((response) => {
        const { items } = response;
        let data = items.map((element) => {
            return formatEntry(element, imagesArray, 1);
        });

        if (addScreenshots) {
            data = {
                ...data[0],
                mobileScreenshot: `${config.backendUri}static/gallery/${data[0].title}-mobile.png`,
                desktopScreenshot: `${config.backendUri}static/gallery/${data[0].title}.png`,
            };
        }
        resolve(data);
    }).catch((error) => {
        reject(error);
    })
};

module.exports = {
    finishPromiseExecution
};