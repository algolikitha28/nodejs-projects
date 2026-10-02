const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Create/Open Database
const db = new sqlite3.Database("./students.db", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create Table
db.run(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    regNo TEXT NOT NULL
  )
`);

// POST Route - Add Student
app.post("/add-student", (req, res) => {
  const { name, regNo } = req.body;

  if (!name || !regNo) {
    return res.status(400).send("Missing fields");
  }

  const query = `
    INSERT INTO students (name, regNo)
    VALUES (?, ?)
  `;

  db.run(query, [name, regNo], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Database error");
    }

    res.send("Student Added Successfully");
  });
});

// GET Route - View All Students
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    res.json(rows);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});