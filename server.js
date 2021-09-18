    // NPM: Packages
    const mysql = require('mysql2');
    const inquirer = require('inquirer');
    const Table = require('easy-table');

    // IMPORT: Local files
    const banner = require('./banner/banner');

    // SERVER: Credentials
    const db = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: "270286cao",
            database: 'game_db',
        }
    );

    // QUESTIONS: Add a video game
    function managerCMS() {

        console.log(banner);

        function start_program() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'start',
                    message: 'Press ENTER to continue'
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
                        "EXIT \n"
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
                    case "Exit \n":
                        exit();
                        break;
                }
            });
        }

        function video_game() {
            inquirer.prompt([
                {
                    message: "View options:",
                    type: "list",
                    choices: [
                        "Show all video games",
                        "Filter video games by studio",
                        "Update video game data",
                        "Add a new video game",
                        "EXIT \n"
                    ],
                    name: "task"

                }
            ]).then(function (answer) {
                var task = answer.task;
                switch (task) {
                    case "Show all video games":
                        orderBy_all();
                        break;
                    case "Filter video games by studio":
                        orderBy_studio();
                        break;
                    case "Update video game data":
                        updateGame();
                        break;
                    case "Add a new video game":
                        newGame();
                        break;
                    case "Exit \n":
                        exit();
                        break;
                }
            })
        }

        function orderBy_all() {
            db.query("SELECT * FROM game", function (err, data) {
                if (err) throw err;
                //using easy-table to display the joined data
                var t = new Table;
                data.forEach(function (vg) {
                    t.cell('Item ID', vg.id)
                    t.cell('Video Game', vg.name)
                    t.cell('Year', vg.year)
                    t.cell('Console', vg.console)
                    t.cell('Console Brand', vg.brand)
                    t.cell('Digital Format', vg.digital)
                    t.cell('Release Price', vg.price)
                    t.cell('ESRB Rating', vg.rate_id)
                    t.newRow()
                })
                console.log(t.toString())
                managerCMS();
            })
        }

        function newGame() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name_videogame',
                    message: 'Video Game name:',
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Enter the name of the video game.";
                    }
                },
                {
                    type: 'input',
                    name: 'year_videogame',
                    message: 'Year of release:',
                    validate: answer => {
                        const pass = answer.match(
                            /^[0-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Enter a year of release.";
                    }
                },
                {
                    type: 'input',
                    name: 'console_name',
                    message: 'Name of the console:',
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
            ]).then(function (answer) {
                var new_game = answer.vg;
                console.log(new_game);
                db.query("INSERT INTO game (name, year, console, brand, digital, price, rate_id) VALUES (?,?,?,?,?,?,?)",
                    function (err) {
                        if (err) throw err;
                        orderBy_all();
                    }
                )
            })
        }

        function exit() {
            db.end();
        }
        start_program();
    }
    managerCMS();