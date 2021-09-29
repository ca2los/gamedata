    // NPM Packages
    const {prompt} = require("inquirer");
    const figlet = require("figlet");
    const table = require("console.table");

    // Requests
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
                        name: "View all video game data",
                        value: "FILTER_ALL"
                    },
                    {
                        name: "Filter by console",
                        value: "FILTER_CONSOLE"
                    },
                    {
                        name: "Filter by publisher",
                        value: "FILTER_PUBLISHER"
                    },
                    {
                        name: "Filter by studio",
                        value: "FILTER_STUDIO"
                    },
                    {
                        name: "Filter by ESRB",
                        value: "FILTER_ESRB"
                    },
                    {
                        name: "Filter by game, console and publisher",
                        value: "FILTER_3_ROWS"
                    },
                    {
                        name: "Filter by game, console, publisher, studio and rating",
                        value: "FILTER_5_ROWS"
                    },
                    {
                        name: "Add a new video game",
                        value: "INSERT_GAME"
                    },
                    {
                        name: "Add a new studio",
                        value: "INSERT_STUDIO"
                    }
                ]
            }
        ]).then(res => {
            let answer = res.options;
            switch (answer) {
                case "FILTER_ALL":
                    queries.get_all().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "FILTER_CONSOLE":
                    queries.get_console().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_PUBLISHER":
                    queries.get_publisher().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_STUDIO":
                    queries.get_studio().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_ESRB":
                    queries.get_esrb().then(([data]) => {
                         console.table(data);
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_3_ROWS":
                    queries.get_3_rows().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "FILTER_5_ROWS":
                    queries.get_5_rows().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    })
                    break;
                case "INSERT_GAME":
                    init_ig();
                    break;
                case "INSERT_STUDIO":
                    init_as();
                    break;
                default:
                    console.log("Exit");
            }
            console.log("Data is ready!");
        });
    }

    function init_ig() {
        prompt([
            {
                type: 'input',
                name: 'VG_TITLE',
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
                name: 'VG_YEAR',
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
                name: 'VG_PRICE',
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
                name: "VG_ESRB",
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
                name: "VG_STUDIO",
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
                name: "VG_PUBLISHER",
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
                name: "VG_CONSOLE",
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
            let answer = res.options;
            switch (answer) {
                case "VG_TITLE":
                    queries.insert_game().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "VG_YEAR":
                    queries.insert_year().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "VG_PRICE":
                    queries.insert_price().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "VG_ESRB":
                    queries.insert_esrb().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "VG_STUDIO":
                    queries.insert_studio().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "VG_PUBLISHER":
                    queries.insert_publisher().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                case "VG_CONSOLE":
                    queries.insert_console().then(([data]) => {
                        console.table(data);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                default:
                    console.log("Exit");
            }
            console.log("Add data!");
        });
    }

    function init_as() {
        prompt([
            {
                type: 'input',
                name: 'ADD_STUDIO',
                message: 'Enter the new name of the studio:',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "You must enter the name of the studio.";
                }
            },
        ]).then(res => {
            let answer = res.options;
            switch (answer) {
                case "ADD_STUDIO":
                    queries.add_studio().then(() => {
                        console.log(`The value ${answer.name} has been added inside Studio.`);
                    }).catch(err => {
                        console.log(err);
                    });
                    break;
                default:
                    console.log("Exit");
            }
            console.log("Data is ready!");
        });
    }

    (function program() {
        figlet("Game DB", function(err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(data);
        });
        initialize();
    })();

    // FILE #06: Order of creation