const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("./../../network/response");

router.get('/', (req, res) => {
    controller.highlights().then((data) => {
        response.success(req, res, data, 200);
    }).catch((error) => {
        response.error(req, res, "Error retrieving portfolio highlights!", 500, error);
    })
});

module.exports = router;