const express = require("express");
const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");
const ProfileController = require("./controller/ProfileController");

const routes = express.Router();

// Lista todas as ONGS
routes.get("/ongs", OngController.index);
// Cadastra uma nova ONG
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

// Lista todas as ONGS
routes.get("/incidents", IncidentController.index);
// Cadastra uma nova ONG
routes.post("/incidents", IncidentController.create);
// Excluir um incidente
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
