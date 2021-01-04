const { formatEntry } = require("../contentful/utils");

const finishPromiseExecution = (promise, resolve, reject) => {
    promise.then((response) => {
        const { items } = response;
        const data = items.map((element) => {
            return formatEntry(element, ['preview'], 1);
        })
        resolve(data);
    }).catch((error) => {
        reject(error);
    })
};


module.exports = {
    finishPromiseExecution
};