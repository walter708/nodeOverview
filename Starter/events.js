const EventEmitter = require("events");
const celebrity = new EventEmitter();

celebrity.on("race", (flag) => {
  if (flag === "win") {
    console.log("Congratulation");
  }
});

celebrity.on("race", (flag) => {
  if (flag === "win") {
    console.log("Boo I could have done better");
  }
});

process.on("exit", (code) => {
  console.log("Goodbye", code);
});

celebrity.emit("race", "win");
