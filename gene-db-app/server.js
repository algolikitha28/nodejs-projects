const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));


// INSERT DATA
app.post('/genes', (req, res) => {

    const gene_name = req.body.gene_name;
    const sequence = req.body.sequence;

    db.run(
        'INSERT INTO genes (gene_name, sequence) VALUES (?, ?)',
        [gene_name, sequence],
        function(err) {

            if (err) {
                console.log(err);
                return res.send("Error");
            }

            res.send("Gene added successfully");
        }
    );
});


// FETCH DATA
app.get('/genes', (req, res) => {

    db.all('SELECT * FROM genes', [], (err, rows) => {

        if (err) {
            console.log(err);
            return res.send("Error");
        }

        res.json(rows);
    });
});




// app.post, app.get ,app.delete,app.put
//REST
//app.put : colon is used to asses particular location 

// UPDATE DATA (PUT)
app.put('/genes/:id', (req, res) => {

    const id = req.params.id;
    const gene_name = req.body.gene_name;
    const sequence = req.body.sequence;

    db.run(
        `UPDATE genes
         SET gene_name = ?, sequence = ?
         WHERE id = ?`,

        [gene_name, sequence, id],

        function(err) {

            if (err) {
                console.log(err);
                return res.send("Error");
            }

            res.send("Gene updated successfully");
        }
    );
});
// DELETE DATA
app.delete('/genes/:id', (req, res) => {

    const id = req.params.id;

    db.run(
        `DELETE FROM genes WHERE id = ?`,
        [id],

        function(err) {

            if (err) {
                console.log(err);
                return res.send("Error deleting gene");
            }

            res.send("Gene deleted successfully");
        }
    );
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});

//endpoint/id
// endpoint ?name= 
//query parameter
// routing parameter 