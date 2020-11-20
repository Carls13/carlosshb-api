const { formatEntry } = require('../../contentful/utils');
const store = require('./store');

const getAll = () => {
    return new Promise((resolve, reject) => {
        store.getAll().then(({ items }) => {
            const data = items.map(element => {
                return formatEntry(element, ['preview'], true);
            });
            resolve(data);
        }).catch((error) => {
            reject(error);
        })
    })
}

module.exports = {
    getAll
};