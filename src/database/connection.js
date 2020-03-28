const knex = require("knex");
const configuration = require("../../knexfile");

// Error - Rever
// const env = process.env.NODE_ENV;
// const config = env === "test" ? configuration.test : configuration.development;

const config = configuration.production;
const connnection = knex(config);

module.exports = connnection;
