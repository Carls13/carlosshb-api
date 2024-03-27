const client = require("../../contentful/client");

const getAll = () => {
    return client.getEntries({
        'content_type': 'locution',
        "order": '-sys.createdAt'
    });
};

module.exports = {
    getAll,
};