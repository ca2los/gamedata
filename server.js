    // NPM Packages
    const {prompt} = require("inquirer");
    const connection = require("./config/connection");
    const table = require("console.table");
    const figlet = require("figlet");

    function initialize() {
        prompt([
            {
                type: "list",
                name: "options",
                message: "What do you want to do?",
                choices: [
                    {
                        name: "View all video game data",
                        value: "FILTER_ALL"
                    },
                    {
                        name: "Filter by console",
                        value: "FILTER_CONSOLE"
                    }
                ]
            }
        ]).then(res => {
            let answer = res.options;
            switch (answer) {
                case 'FILTER_ALL':
                    get_all().then(([data]) => {
                        console.table((data));
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case 'FILTER_CONSOLE':
                    get_console().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                default:
                    console.log("Exit");
            }
            res.confirm === res.password
                ? console.log('Data is ready!')
                : console.log('Data unavailable.')
        });
    }

    function get_all(){
        return connection.promise().query (
            "SELECT game.name, game.year, game.price AS Price, console.name AS Console, publisher.name AS Publisher, studio.name AS Studio, rate.name AS ESRB FROM console INNER JOIN game ON game.console_id = console.id INNER JOIN publisher ON game.publisher_id = publisher.id INNER JOIN studio ON game.studio_id = studio.id INNER JOIN rate ON game.rate_id = rate.id ORDER BY game.price DESC;"
        );
    }

    function get_console(){
        return connection.promise().query (
            "SELECT game.name AS Game, console.name AS Console FROM game JOIN console ON game.console_id = console.id;"
        );
    }

    function program() {
        figlet('Game DB', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });
        initialize();
    }
    program();

    /* DATA
    1. Destructuring assignment
    const {prompt} = require("inquirer");
    */