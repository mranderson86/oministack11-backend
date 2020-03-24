const express = require("express");

const app = express();
const port = 3333;

app.get("/", (request, response) => {
  return response.send("Hello World");
});

app.listen(port);
