const express = require('express');
const controller = require('./controller');
const router = express.Router();
const response = require('./../../network/response');

router.get('/', (req, res) => {
    controller.getAll().then((data) => {
        response.success(req, res, data, 200);
    }).catch((error) => {
        response.error(req, res, 'Error retrieving blog', 500, error);
    })
})

module.exports = router;
