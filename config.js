require('dotenv').config();

module.exports = {
    port: parseInt(process.env.PORT) || 3001,
    constentfulSpace: process.env.CONTENTFUL_SPACE,
    constentfulToken: process.env.CONTENTFUL_TOKEN,
}