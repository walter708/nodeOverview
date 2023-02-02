const express = require("express");
const path = require("path");

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
app.use("/site", express.static(path.join(__dirname, "public")));
app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends are clever",
    caption: "Linux Guru Channel",
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
