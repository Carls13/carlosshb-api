const client = require("../../contentful/client");

const getHighLights = () => {
    return client.getEntries({
        'content_type': 'portfolio',
        "order": 'sys.createdAt',
        "limit": 3,
        "fields.highlight": true
    });
};

module.exports = {
    getHighLights
};