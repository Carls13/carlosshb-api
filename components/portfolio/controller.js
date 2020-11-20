const { formatEntry } = require('../../contentful/utils');
const store = require('./store');

const list = () => {
    return new Promise((resolve, reject) => {
        store.getAll().then((response) => {
            const { items } = response;
            const data = items.map((element) => {
                return formatEntry(element, ['preview'], 1);
            })
            resolve(data);
        }).catch((error) => {
            reject(error);
        })
    })
}

module.exports = {
    list
};