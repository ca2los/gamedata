    // NPM Packages
    const {prompt} = require("inquirer");
    const table = require("console.table");
    const figlet = require("figlet");
    
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
                default:
                    console.log("Exit");
            }
            res.confirm === res.password
                ? console.log("Data is ready!")
                : console.log("Data unavailable.")
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