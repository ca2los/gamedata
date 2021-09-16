    // NPM: Packages
    const express = require('express');
    const mysql = require('mysql2');
    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');
    const cTable = require('console.table');
    const term = require("terminal-kit").terminal;
    const util = require("util");

    // IMPORT: Local files
    const banner = require('./banner/banner');
    const {application} = require("express");

    const OUTPUT_DIR = path.resolve(__dirname, "dev");
    const outputPath = path.join(OUTPUT_DIR, 'index.html');
    const render = require('./js/html.js');
    const Manager = require("./js/profile_01");

    // Empty arrays to retrieve data from the program
    const save_VG = [];

    // LOCAL: Computer connection
    const PORT = process.env.PORT || 3001;
    const app = express();

    // PARSING: Data manipulation (retrieves) @ INSOMNIA
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    // SERVER: Credentials
    const db = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: "",
            database: 'game_db',
        }
    );

    // QUESTIONS: Add a video game
    function appMenu() {

        function start_program() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'start',
                    message: 'Do you want to start?'
                }
            ]).then(() => {
                now_create();
            })
        }

        function now_create() {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'type_data',
                    message: 'Select the type of data you want enter:',
                    choices: [
                        'VideoGame',
                        'Movie',
                        'TVSeries',
                        'Books',
                        'Comics',
                        'No data at the moment'
                    ]
                }
            ]).then(user_select => {
                switch (user_select.type_data) {
                    case 'VideoGame':
                        video_game();
                        break;
                    case 'Movie':
                        movie();
                        break;
                    case 'TVSeries':
                        tv_series();
                        break;
                    case 'Books':
                        books();
                        break;
                    case 'Comics':
                        comics();
                        break;
                    default:
                        createMedia();
                }
            });
        }

        function video_game() {
            console.log("Add the video game");
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name_videogame',
                    message: 'Name of the video game:',
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Enter a GitHub user.";
                    }
                },
                {
                    type: 'input',
                    name: 'year_videogame',
                    message: 'Year of release',
                    validate: answer => {
                        const pass = answer.match(
                            /^[0-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Enter a number value.";
                    }
                },
                {
                    type: 'input',
                    name: 'console_name',
                    message: 'Name of the console',
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Enter the name of the console.";
                    }
                },
                {
                    type: 'input',
                    name: 'console_brand',
                    message: 'Name of the brand:',
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Enter the name of the brand.";
                    }
                },
                {
                    type: 'confirm',
                    name: 'game_format',
                    message: 'Is the game in digital format?',
                },
                {
                    type: 'input',
                    name: 'release_price',
                    message: 'Price on release day: $',
                    validate: answer => {
                        const pass = answer.match(
                            /^[0-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Enter a number value.";
                    }
                },
                {
                    type: 'input',
                    name: 'rating_videogame',
                    message: 'ESRB rating:',
                    validate: answer => {
                        const pass = answer.match(
                            /^[0-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Enter a number value.";
                    }
                }
            ]).then(answers => {
                const videogame = new VideoGame(
                    answers.name_videogame,
                    answers.year_videogame,
                    answers.console_name,
                    answers.console_brand,
                    answers.game_format,
                    answers.release_price,
                    answers.rating_videogame,
                );
                save_VG.push(manager);
                now_create();
            });
        }

        function createMedia() {
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(save_VG), 'utf-8');
        }

        start_program();
    }
    appMenu();

    // GET: API URL (Read all video games) @ INSOMNIA
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

    // POST: API URL (New video game) @ INSOMNIA
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

    // PUT: API URL (Update video game) @ INSOMNIA
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

    // DELETE: API URL @ INSOMNIA
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

    app.use((req, res) => {
        res.status(404).end();
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });


    // Express is a backend for Node JS to create web apps and APIs.
    // MySQL is the most famous database service and the package allows Node JS connection.