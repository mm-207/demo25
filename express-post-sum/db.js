const { Pool } = require("pg");

const pool = new Pool({
  user: "familietre_db_user",
  host: "dpg-cv81ld8gph6c7399b14g-a.oregon-postgres.render.com",
  database: "familietre_db",
  password: "5t05c45sou3oKlrT6yF4fq1Mse6e4BXD",
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Legger til SSL-støtte
  },
});

module.exports = pool;
