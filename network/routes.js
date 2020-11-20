const portfolio = require('./../components/portfolio/network');
const blog = require('./../components/blog/network');
const contact = require('./../components/contact/network');

const routes = (server) => {
    server.use('/portfolio', portfolio);
    server.use('/blog', blog);
    server.use('/contact', contact);
};

module.exports = routes;