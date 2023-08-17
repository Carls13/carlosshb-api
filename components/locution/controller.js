const { finishPromiseExecution } = require('../../helpers/promise');
const store = require('./store');

const list = () => {
    return new Promise((resolve, reject) => {
        finishPromiseExecution(store.getAll(), resolve, reject, false, false);
    })
};

module.exports = {
    list,
};