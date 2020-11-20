const contentful = require('contentful');
const config = require("./../config");

const client = contentful.createClient({
    space: config.constentfulSpace,
    accessToken: config.constentfulToken
});

module.exports = client;