const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("./../../network/response");

const FOR_MOBILE = true;

router.get('/screenshots', (req, res) => {
    controller.takeScreenshot(FOR_MOBILE).then(() => {
        response.success(req, res, 'Success!', 200);
    }).catch((error) => {
        response.error(req, res, "Error taking screenshots!", 500, error);
    })
});

router.get('/:slug', (req, res) => {
    const { slug } = req.params;
    controller.getBySlug(slug).then((data) => {
        response.success(req, res, data, 200);
    }).catch((error) => {
        response.error(req, res, "Error retrieving portfolio item!", 500, error);
    })
});

router.get('/', (req, res) => {
    controller.list().then((data) => {
        response.success(req, res, data, 200);
    }).catch((error) => {
        response.error(req, res, "Error retrieving portfolio items!", 500, error);
    })
});

module.exports = router;