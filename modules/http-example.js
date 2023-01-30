const { send, receive, REQUEST_TIMEOUT } = require("./internals");

function makeRequest(url, data) {
  const feedback = send(url, data);
  return receive(feedback);
}

const result = makeRequest("http://www.google.com", "hgdjhd");
console.log(result);
// console.log(require.cache);
