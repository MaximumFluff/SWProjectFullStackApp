/* Define database connection here */
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "eu-cdbr-west-02.cleardb.net",
    database: "heroku_25717cbe1f7da66",
    user: "b1d370971fb8ac",
    password: "d1436b4e"
  }
});

module.exports = knex;
