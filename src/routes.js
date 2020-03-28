const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");
const ProfileController = require("./controller/ProfileController");
const SessionController = require("./controller/SessionController");

const routes = express.Router();

// Página Inicial
routes.get("/", (request, response) => {
  response.json({
    home: "Api is working"
  });
});

// Login do usuário
// Validação do Id de autenticação da ONG
routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  SessionController.create
);

// Lista todas as ONGS
routes.get("/ongs", OngController.index);
// Cadastra uma nova ONG
// Validação de Campos
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

// Validação de Headers
routes.get(
  "/profiles",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

// Lista todos os incidentes das ONGS
// Validaçao de Query
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);

// Cadastra uma nova ONG
// Validação de Campos
routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().email(),
      value: Joi.number().required()
    }),

    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  IncidentController.create
);

// Excluir um incidente
// Validação de Parâmetros
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    }),

    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  IncidentController.delete
);

module.exports = routes;
