const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  // lista todos os incidentes
  async index(request, response) {
    const incidents = await connection("incidents").select("*");
    return response.send(incidents);
  },

  // Cadastra um novo incidente
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents")
      .returning("id")
      .insert({
        title,
        description,
        value,
        ong_id
      });

    return response.json({ id });
  }
};
