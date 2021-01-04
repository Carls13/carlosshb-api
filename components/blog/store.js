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

module.exports = {
    getAll,
};