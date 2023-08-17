const portfolio = require('./../components/portfolio/network');
const highlights = require('./../components/highlights/network');
const blog = require('./../components/blog/network');
const contact = require('./../components/contact/network');
const locution = require('./../components/locution/network');

const routes = (server) => {
    server.use('/portfolio/highlights', highlights);
    server.use('/portfolio', portfolio);
    server.use('/blog', blog);
    server.use('/contact', contact);
    server.use('/locution', locution);
};

module.exports = routes;