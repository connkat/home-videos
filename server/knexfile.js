require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: process.env.URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  testing: {
    client: "pg",
    connection: process.env.URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  production: {
    client: "pg",
    connection: process.env.URL,
    user: process.env.USER,
    password: process.env.PASSWORD,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};