// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "trackingtech.cksdalfzup7w.sa-east-1.rds.amazonaws.com",
      port: "5432",
      database: "bethehero",
      user: "mranderson86",
      password: "mranderson86"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  test: {
    client: "postgresql",
    connection: {
      host: "trackingtech.cksdalfzup7w.sa-east-1.rds.amazonaws.com",
      port: "5432",
      database: "test",
      user: "mranderson86",
      password: "mranderson86"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      host: "trackingtech.cksdalfzup7w.sa-east-1.rds.amazonaws.com",
      port: "5432",
      database: "bethehero",
      user: "mranderson86",
      password: "mranderson86"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  }
};
