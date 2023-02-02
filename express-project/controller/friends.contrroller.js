const model = require("../model/friends.model");
function addAFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing the name property",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.status(200).json(newFriend);
}

function getAFriend(req, res) {
  const friendsId = Number(req.params.friendsId);
  const friend = model[friendsId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "friend not found" });
  }
}

function getAllFriends(req, res) {
  res.json(model);
}

module.exports = {
  addAFriend,
  getAFriend,
  getAllFriends,
};
