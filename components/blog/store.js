const client = require("../../contentful/client");

const getAll = () => {
    return client.getEntries({
        'content_type': 'blog',
        "order": 'sys.createdAt'
    });
}

module.exports = {
    getAll
};