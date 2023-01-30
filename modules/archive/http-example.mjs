import { send } from "./request.mjs";
import { receive } from "./response.mjs";
import { REQUEST_TIMEOUT } from "./request.mjs";

function makeRequest(url, data) {
  const feedback = send(url, data);
  return receive(feedback);
}

const result = makeRequest("http://www.google.com", "hgdjhd");
console.log(result);
