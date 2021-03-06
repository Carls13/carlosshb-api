const { formatEntry } = require("../contentful/utils");
const config = require("./../config");

const finishPromiseExecution = (promise, resolve, reject, addScreenshots = false) => {
    promise.then((response) => {
        const { items } = response;
        let data = items.map((element) => {
            return formatEntry(element, ['preview'], 1);
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