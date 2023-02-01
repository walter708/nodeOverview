const http = require("http");

const PORT = 5000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Isaac Newton",
  },
  {
    id: 1,
    name: "Pablo ",
  },
  {
    id: 2,
    name: "Isaac Newton",
  },
];

server.on("request", (req, res) => {
  const path = req.url.split("/");
  if (path[1] === "friend") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (path.length !== 3) {
      res.end(JSON.stringify(friends));
    } else {
      const paramIndex = Number(path[2]);
      res.end(JSON.stringify(friends[paramIndex]));
    }
  } else if (path[1] === "message") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> Hello isaac </li>");
    res.write("<li> What do you think of astronomy </li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => console.log(`listening on port ${PORT}...`));
