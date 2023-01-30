const REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return `Encrypted Data`;
}

function send(url, data) {
  const encrypted = encrypt(data);
  return encrypted;
}

module.exports = { send, REQUEST_TIMEOUT };

console.log("Hello from request.js");
