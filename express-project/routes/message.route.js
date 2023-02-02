const express = require("express");

const { getAMessage } = require("../controller/message.controller");

const messageRouter = express.Router();

messageRouter.get("/", getAMessage);

module.exports = messageRouter;
