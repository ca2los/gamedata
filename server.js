    // NPM
    const {prompt} = require("inquirer");
    const figlet = require("figlet");
    const chalk = require('chalk');
    require("console.table");

    // REQ
    const Queries = require("./requests/requests");
    const queries = new Queries();

    function initialize() {
        prompt([
            {
                type: "list",
                name: "options",
                message: "SELECT AN OPTION:",
                choices: [
                    {
                        name: chalk.yellow("View all data"),
                        value: "GET_ALL"
                    },
                    {
                        name: chalk.yellow("View all consoles"),
                        value: "GET_CONSOLE"
                    },
                    {
                        name: chalk.yellow("View all publishers"),
                        value: "GET_PUBLISHER"
                    },
                    {
                        name: chalk.yellow("View all studios"),
                        value: "GET_STUDIO"
                    },
                    {
                        name: chalk.yellow("View all ESRB"),
                        value: "GET_ESRB"
                    },
                    {
                        name: chalk.green("Filter games by console"),
                        value: "FILTER_CONSOLE"
                    },
                    {
                        name: chalk.green("Filter games by publisher"),
                        value: "FILTER_PUBLISHER"
                    },
                    {
                        name: chalk.green("Filter games by studio"),
                        value: "FILTER_STUDIO"
                    },
                    {
                        name: chalk.green("Filter games by ESRB"),
                        value: "FILTER_ESRB"
                    },
                    {
                        name: chalk.green("Filter by game, console, and publisher"),
                        value: "FILTER_3_ROWS"
                    },
                    {
                        name: chalk.green("Filter by game, console, publisher, studio, and rating"),
                        value: "FILTER_5_ROWS"
                    },
                    {
                        name: chalk.blue("Add new console"),
                        value: "INSERT_CONSOLE"
                    },
                    {
                        name: chalk.blue("Add new publisher"),
                        value: "INSERT_PUBLISHER"
                    },
                    {
                        name: chalk.blue("Add new studio"),
                        value: "INSERT_STUDIO"
                    },
                    {
                        name: chalk.blue("Add new video game"),
                        value: "INSERT_GAME"
                    },
                    {
                        name: "Update console",
                        value: "UPDATE_CONSOLE"
                    }
                ]
            }
        ]).then(res => {
            let answer = res.options;
            switch (answer) {
                case "GET_ALL":
                    queries.get_all().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "GET_CONSOLE":
                    queries.get_console().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "GET_PUBLISHER":
                    queries.get_publisher().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "GET_STUDIO":
                    queries.get_studio().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "GET_ESRB":
                    queries.get_esrb().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "FILTER_CONSOLE":
                    queries.get_console_by_game().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_PUBLISHER":
                    queries.get_publisher_by_game().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_STUDIO":
                    queries.get_studio_by_game().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_ESRB":
                    queries.get_esrb_by_game().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_3_ROWS":
                    queries.get_3_rows_by_game().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_5_ROWS":
                    queries.get_5_rows_by_game().then(([data]) => {
                        console.table(data);
                        initialize();
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "INSERT_CONSOLE":
                    init_ac();
                    break;
                case "INSERT_PUBLISHER":
                    init_ap();
                    break;
                case "INSERT_STUDIO":
                    init_as();
                    break;
                case "INSERT_GAME":
                    init_ig();
                    break;
                default:
                    console.log(chalk.bold.red("Exit"));
            }
            console.log("Data is ready!");
        });
    }

    function init_ig() {
        prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the video game title:',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "You must enter a video game title.";
                }
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter the year of release:',
                validate: answer => {
                    const pass = answer.match(
                        /^[0-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "You must enter the year when the game was released.";
                }
            },
            {
                type: 'input',
                name: 'price',
                message: 'Enter the price of the game: USD $',
                validate: answer => {
                    const pass = answer.match(
                        /^[0-9.]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Only numbers (0-9) and decimals separated by a dot are allowed.";
                }
            },
            {
                type: "list",
                name: "rate_id",
                message: "Select the ESRB classification:",
                choices: [
                    {
                        name: "(EC) Early Childhood",
                        value: 1,
                    },
                    {
                        name: "(E) Everyone",
                        value: 2,
                    },
                    {
                        name: "(E+) Everyone +10",
                        value: 3
                    },
                    {
                        name: "(T) Teen",
                        value: 4
                    },
                    {
                        name: "(M) Mature",
                        value: 5
                    },
                    {
                        name: "(A) Adults +18",
                        value: 6
                    },
                    {
                        name: "(RP) Rating Pending",
                        value: 7
                    }
                ]
            },
            {
                type: "list",
                name: "studio_id",
                message: "Select the studio:",
                choices: [
                    {
                        name: "Arkane",
                        value: 1,
                    },
                    {
                        name: "Bluepoint",
                        value: 2,
                    },
                    {
                        name: "Insomniac",
                        value: 3
                    },
                    {
                        name: "Kojima Productions",
                        value: 4
                    },
                    {
                        name: "Nintendo",
                        value: 5
                    },
                    {
                        name: "Polyphony Digital",
                        value: 6
                    },
                    {
                        name: "Square Enix",
                        value: 7
                    },
                    {
                        name: "Sucker Punch",
                        value: 8
                    }
                ]
            },
            {
                type: "list",
                name: "publisher_id",
                message: "Select the publisher:",
                choices: [
                    {
                        name: "Bethesda Softworks LLC",
                        value: 1,
                    },
                    {
                        name: "Nintendo Entertainment",
                        value: 2,
                    },
                    {
                        name: "Square Enix",
                        value: 3
                    },
                    {
                        name: "Sony Interactive Entertainment",
                        value: 4
                    }
                ]
            },
            {
                type: "list",
                name: "console_id",
                message: "Select the console:",
                choices: [
                    {
                        name: "PS5",
                        value: 1,
                    },
                    {
                        name: "PS4",
                        value: 2,
                    },
                    {
                        name: "PS3",
                        value: 3
                    },
                    {
                        name: "PS2",
                        value: 4
                    },
                    {
                        name: "PS1",
                        value: 5
                    },
                    {
                        name: "Nintendo Switch",
                        value: 6
                    },
                    {
                        name: "Nintendo 3DS",
                        value: 7
                    },
                    {
                        name: "Super Nintendo",
                        value: 8
                    },
                    {
                        name: "PC",
                        value: 9
                    }
                ]
            }
        ]).then(res => {
            queries.add_game(res).then(() => {
                initialize();
                console.log(`Video game ${res.name} has been added!`);
            }).catch(err => {
                console.error(err);
            });
            console.log("Data is ready!");
        });
    }

    function init_ac() {
        prompt([
            {
                type: "input",
                name: "name",   // It must be the name of the TABLE ROW
                message: "Enter the new name of the console:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "You must enter the name of the console.";
                }
            },
        ]).then(res => {
            queries.add_console(res).then(() => {
                initialize();
                console.log(`${res.name} console has been added!`);
            }).catch(err => {
                console.error(err);
            });
            console.log("Data is ready!");
        });
    }

    function init_ap() {
        prompt([
            {
                type: "input",
                name: "name",   // It must be the name of the TABLE ROW
                message: "Enter the new name of the publisher:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "You must enter the name of the publisher.";
                }
            },
        ]).then(res => {
            queries.add_publisher(res).then(() => {
                initialize();
                console.log(`Publisher ${res.name} has been added!`);
            }).catch(err => {
                console.error(err);
            });
            console.log("Data is ready!");
        });
    }

    function init_as() {
        prompt([
            {
                type: "input",
                name: "name",   // It must be the name of the TABLE ROW
                message: "Enter the new name of the studio:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "You must enter the name of the studio.";
                }
            },
        ]).then(res => {
            queries.add_studio(res).then(() => {
                initialize();
                console.log(`Studio ${res.name} has been added!`);
            }).catch(err => {
                console.error(err);
            });
            console.log("Data is ready!");
        });
    }

    figlet("Game  DataBase", function(err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
        initialize();
    });

    // FILE #06: Order of creation