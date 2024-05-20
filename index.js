const express = require("express")
const knex = require("knex")
const bodyParser = require('body-parser');
const { Model } = require("objection")
const app = express()
const PORT = 9000

const router = require('./routes')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.json());
app.use(router)

const knexInstance = knex({
  client: "pg",
  connection: {
    user: "postgres",
    password: "postgres",
    port: 5432,
    host: "127.0.0.1",
    database: "ch_6",
  }
})

Model.knex(knexInstance)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});