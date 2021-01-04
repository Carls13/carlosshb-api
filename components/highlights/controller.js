const { finishPromiseExecution } = require('../../helpers/promise');
const store = require('./store');

const highlights = () => {
    return new Promise((resolve, reject) => {
        finishPromiseExecution(store.getHighLights(), resolve, reject);
    })
};

module.exports = {
    highlights
};