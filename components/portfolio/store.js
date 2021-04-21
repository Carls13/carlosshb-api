const client = require("../../contentful/client");

const getAll = () => {
    return client.getEntries({
        'content_type': 'portfolio',
        "order": 'sys.createdAt'
    });
};

const getOneByName = async (title) => {
    const response = await client.getEntries({
        'content_type': 'portfolio',
        'fields.title[match]': title
    });

    return response;
};

module.exports = {
    getAll,
    getOneByName
};