const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./genes.db');

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS genes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            gene_name TEXT,
            sequence TEXT
        )
    `);

    console.log("Database connected");
});

module.exports = db;