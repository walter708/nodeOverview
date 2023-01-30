const { get } = require("http");

const req = get("http://www.google.com", (res) => {
  res.on("data", (chuck) => {
    console.log(`[chunk] : ${chuck}`);
  });
  res.on("end", () => {
    console.log("Closed");
  });
});
