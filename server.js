    // NPM: Packages
    const express = require('express');
    const mysql = require('mysql2');

    // LOCAL: Computer connection
    const PORT = process.env.PORT || 3001;
    const app = express();

    // PARSING: Data manipulation (retrieves)
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    // SERVER: Credentials
    const db = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: "270286cao",
            database: 'game_db'
        }
    );

    // GET: API URL (Read all video games)
    app.get('/api/video-games', (req,res) => {
        const sql = `SELECT id, name AS title FROM game`;

        db.query(sql, (err, rows) => {
           if (err) {
               res.status(500).json({error: err.message});
               return;
           }
           res.json({
               message: 'Success',
               data: rows
           });
        });
    });

    // POST: API URL (New video game)
    app.post('/api/new',({body},res) => {
        const sql = `INSERT INTO game (name) VALUES (?)`;
        const params = [body.name];

        db.query(sql,params,(err,result) => {
            if (err) {
                res.status(404).json({error: err.message});
                return;
            }
            res.json({
                message: 'Success',
                data: body
            });
        });
    });

    // PUT: API URL (Update video game)
    app.put('/api/update/:id', (req,res) => {
        const sql = `UPDATE game SET name = ? WHERE id = ?`;
        const params = [req.body.name, req.params.id];

        db.query(sql,params,(err,result) => {
            if (err) {
                res.status(404).json({error: err.message});
            }
            else if (!result.affectedRows){
                res.json({
                    message: 'Game Not Found'
                });
            }
            else {
                res.json({
                    message: 'Success',
                    data: req.body,
                    changes: result.affectedRows
                });
            }
        })
    });

    // DELETE: API URL
    app.delete('/api/delete/:id',(req,res) => {
        const sql = `DELETE FROM game WHERE id = ?`;
        const params = [req.params.id];

        db.query(sql,params,(err,result) => {
            if (err) {
                res.readAsText(400).json({error: res.message});
            }
            else if (!result.affectedRows) {
                res.json({
                    message: 'Game Not Found'
                });
            }
            else {
                res.json({
                    message: 'Deleted',
                    changes: result.affectedRows,
                    id: req.params.id
                });
            }
        });
    });

    // Express is a backend for Node JS to create web apps and APIs.
    // MySQL is the most famous database service and the package allows Node JS connection.