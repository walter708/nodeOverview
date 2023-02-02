const express = require("express");

const messageRouter = require("./routes/message.route");
const friendsRouter = require("./routes/friends.route");

const app = express();
const PORT = 4000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`);
});
app.use(express.json());
app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
