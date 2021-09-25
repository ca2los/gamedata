    // NPM Packages
    const connection = require("../config/connection");

    class Queries {
        get_all(){
            return connection.promise().query (
                "SELECT game.name, game.year, game.price AS Price, console.name AS Console, publisher.name AS Publisher, studio.name AS Studio, rate.name AS ESRB FROM console INNER JOIN game ON game.console_id = console.id INNER JOIN publisher ON game.publisher_id = publisher.id INNER JOIN studio ON game.studio_id = studio.id INNER JOIN rate ON game.rate_id = rate.id ORDER BY game.price DESC;"
            );
        }
        get_console(){
            return connection.promise().query (
                "SELECT game.name AS Game, console.name AS Console FROM game JOIN console ON game.console_id = console.id;"
            );
        }
        get_publisher(){
            return connection.promise().query(
                "SELECT game.name AS Game, publisher.name AS Publisher FROM game JOIN publisher ON game.publisher_id = publisher.id;"
            );
        }
        get_studio(){
            return connection.promise().query(
                "SELECT game.name AS Game, studio.name AS Studio FROM game JOIN studio ON game.studio_id = studio.id;\n"
            );
        }
        get_esrb(){
            return connection.promise().query(
                "SELECT game.name AS Game, rate.name AS ESRB FROM game JOIN rate ON game.rate_id = rate.id;\n"
            );
        }
        get_3_rows(){
            return connection.promise().query(
                "SELECT game.name AS Game, console.name AS Console, publisher.name AS Publisher FROM console INNER JOIN game ON game.console_id = console.id INNER JOIN publisher ON game.publisher_id = publisher.id ORDER BY game.price DESC;"
            );
        }
        get_5_rows(){
            return connection.promise().query(
                "SELECT game.name AS Game, console.name AS Console, publisher.name AS Publisher, studio.name AS Studio, rate.name AS ESRB FROM console INNER JOIN game ON game.console_id = console.id INNER JOIN publisher ON game.publisher_id = publisher.id INNER JOIN studio ON game.studio_id = studio.id INNER JOIN rate ON game.rate_id = rate.id ORDER BY game.price DESC;"
            );
        }
        insert_game(){
            return connection.promise().query(
                "INSERT INTO game (name,year,price,rate_id,studio_id,publisher_id,console_id) VALUES (?,?,?,?,?,?,?);"
            );
        }
    }
    module.exports = Queries;

    // FILE #05: Order of creation