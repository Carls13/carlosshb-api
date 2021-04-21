const express = require("express");
const app = express();
const server = require("http").Server(app);

const config = require('./config');

const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./network/routes');

app.use(cors());

app.use(bodyParser.json());
app.use(express.static('public'));

router(app);

server.listen(config.port, () => {
    console.log('Escuchando en puerto ' + config.port);
});