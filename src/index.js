const express = require("express");
const app = express();

const routes = require("./routes");

const port = 3333;

// resposta no formato json
app.use(express.json());
app.use(routes);

app.listen(port);
