const { formatEntry } = require('../../contentful/utils');
const store = require('./store');

const getAll = (limit) => {
    return new Promise((resolve, reject) => {
        store.getAll(limit).then(({ items }) => {
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