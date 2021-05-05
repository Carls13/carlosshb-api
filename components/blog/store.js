const client = require("../../contentful/client");

const getAll = (limit) => {
    let config = {
        'content_type': 'blog',
        "order": 'sys.createdAt'
    };

    if (limit) {
        config = {
            ...config,
            "limit": parseInt(limit)
        }
    }

    return client.getEntries(config);
};

const getOneByTitle = async (title) => {
    const response = await client.getEntries({
        'content_type': 'blog',
        'fields.title[match]': title
    });

    return response;
};

module.exports = {
    getAll,
    getOneByTitle
};