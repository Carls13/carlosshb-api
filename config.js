require('dotenv').config();

module.exports = {
    port: parseInt(process.env.PORT) || 3001,
    constentfulSpace: process.env.CONTENTFUL_SPACE,
    constentfulToken: process.env.CONTENTFUL_TOKEN,
    email: process.env.GMAIL_ACCOUNT,
    password: process.env.GMAIL_PASSWORD
}