const express = require('express');
const controller = require('./controller');
const router = express.Router();
const response = require("./../../network/response");

router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        return response.error(req, res, "Error. You must provide all the info.", 422, new Error("Missing values"));
    }

    controller.sendEmail(name, email, subject, message).then((message) => {
        response.success(req, res, message, 201);
    }).catch((error) => {
        response.error(req, res, "Error on email sending", 500, error);
    })
})

module.exports = router;