const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./students.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER,
            department TEXT
        )
    `);
});

module.exports = db;