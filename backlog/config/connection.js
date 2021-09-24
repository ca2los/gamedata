    // NPM Package
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "game_db"
    });

    connection.connect(function (err) {
        if (err) throw err;
    });

    module.exports = connection;

    // FILE #04: Order of creation