const express = require('express');
const db = require('./database');

const app = express();

app.use(express.static('public'));

// GET route to retrieve all students
app.get('/students', (req, res) => {

    db.all("SELECT * FROM students", [], (err, rows) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
