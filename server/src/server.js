const express = require("express");
const server = express();
const bodyParser = require("body-parser");
server.use(bodyParser.json());
const cors = require("cors");
server.use(cors());
server.use(express.json());

module.exports = server;
