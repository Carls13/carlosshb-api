const { formatEntry } = require('../../contentful/utils');
const { slugToTitle } = require('../../helpers/decode-slug');
const store = require('./store');

const getAll = (limit) => {
    return new Promise((resolve, reject) => {
        store.getAll(limit).then(({ items }) => {
            const data = items.map(element => {
                return formatEntry(element, [], true);
            });
            resolve(data);
        }).catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}

const getBySlug = (slug) => {
    const title = slugToTitle(slug, true);

    return new Promise((resolve, reject) => {
        store.getOneByTitle(title).then(({ items }) => {
            const data = formatEntry(items[0], [], true);
            resolve(data);
        }).catch((error) => {
            console.log(error);
            reject(error);
        });
    });
};

module.exports = {
    getAll,
    getBySlug
};