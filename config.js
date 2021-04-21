require('dotenv').config();

module.exports = {
    port: parseInt(process.env.PORT) || 3001,
    constentfulSpace: process.env.CONTENTFUL_SPACE,
    constentfulToken: process.env.CONTENTFUL_TOKEN,
    email: process.env.GMAIL_ACCOUNT,
    password: process.env.GMAIL_PASSWORD,
    backendUri: process.env.BACKEND_URI || "http://localhost:3001/"
}