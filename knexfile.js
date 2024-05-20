// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      user: "postgres",
      password: "postgres",
      port: 5432,
      host: "127.0.0.1",
      database: "ch_6",
    }
  }
};
