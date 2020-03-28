const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

const port = 3333;

app.use(cors());
// resposta no formato json
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port);
