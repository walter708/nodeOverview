const path = require("path");

function getAMessage(req, res) {
  const pathToFile = path.join(__dirname, "..", "public", "networkChuck.png");
  res.sendFile(pathToFile);
  // res.send(
  //   "<html><body><ul><li> Hello Albert!!!!!!!!!!!!!!!!!!!</li></ul></body></html>"
  // );
}

module.exports = {
  getAMessage,
};
