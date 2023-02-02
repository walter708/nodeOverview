const express = require("express");
const {
  addAFriend,
  getAFriend,
  getAllFriends,
} = require("../controller/friends.contrroller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("Ip Address", req.ip);
  next();
});

friendsRouter.get("/", getAllFriends);
friendsRouter.get("/:friendsId", getAFriend);
friendsRouter.post("/", addAFriend);

module.exports = friendsRouter;
