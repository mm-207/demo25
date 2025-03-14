const express = require("express");
const pool = require("./db");
const app = express();

app.use(express.json());

// Test databaseforbindelsen
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Feil ved tilkobling til databasen:', err);
    } else {
        console.log('Database tilkoblet! Tid:', res.rows[0].now);
    }
});

// Hent alle personer fra databasen
app.get("/api/family", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM personer");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Legg til en ny person
app.post("/api/family", async (req, res) => {
  try {
    const { name, age } = req.body;
    const result = await pool.query(
      "INSERT INTO family_tree (name, age) VALUES ($1, $2) RETURNING *",
      [name, age]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Oppdater en person
app.put("/api/family/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const result = await pool.query(
      "UPDATE family_tree SET name = $1, age = $2 WHERE id = $3 RETURNING *",
      [name, age, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Slett en person
app.delete("/api/family/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM family_tree WHERE id = $1", [id]);
    res.json({ message: "Person slettet" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});
