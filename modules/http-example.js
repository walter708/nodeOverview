const { send } = require("./request.js");
const { receive } = require("./response.js");
const { REQUEST_TIMEOUT } = require("./request.js");

function makeRequest(url, data) {
  const feedback = send(url, data);
  return receive(feedback);
}

const result = makeRequest("http://www.google.com", "hgdjhd");
console.log(result);
console.log(require.cache);
