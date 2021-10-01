    // NPM
    const connection = require("../config/connection");

    class Queries {
        get_all(){
            return connection.promise().query (
                "SELECT game.name, game.year, game.price AS Price, console.name AS Console, publisher.name AS Publisher, studio.name AS Studio, rate.name AS ESRB FROM console INNER JOIN game ON game.console_id = console.id INNER JOIN publisher ON game.publisher_id = publisher.id INNER JOIN studio ON game.studio_id = studio.id INNER JOIN rate ON game.rate_id = rate.id ORDER BY game.price DESC;"
            );
        }
        get_console(){
            return connection.promise().query(
                "SELECT * FROM console;"
            );
        }
        get_publisher(){
            return connection.promise().query(
                "SELECT * FROM publisher;"
            );
        }
        get_studio(){
            return connection.promise().query(
                "SELECT * FROM studio;"
            );
        }
        get_esrb(){
            return connection.promise().query(
                "SELECT * FROM rate;"
            );
        }
        get_console_by_game(){
            return connection.promise().query (
                "SELECT game.name AS Game, console.name AS Console FROM game JOIN console ON game.console_id = console.id;"
            );
        }
        get_publisher_by_game(){
            return connection.promise().query(
                "SELECT game.name AS Game, publisher.name AS Publisher FROM game JOIN publisher ON game.publisher_id = publisher.id;"
            );
        }
        get_studio_by_game(){
            return connection.promise().query(
                "SELECT game.name AS Game, studio.name AS Studio FROM game JOIN studio ON game.studio_id = studio.id;"
            );
        }
        get_esrb_by_game(){
            return connection.promise().query(
                "SELECT game.name AS Game, rate.name AS ESRB FROM game JOIN rate ON game.rate_id = rate.id;"
            );
        }
        get_3_rows_by_game(){
            return connection.promise().query(
                "SELECT game.name AS Game, console.name AS Console, publisher.name AS Publisher FROM console INNER JOIN game ON game.console_id = console.id INNER JOIN publisher ON game.publisher_id = publisher.id ORDER BY game.price DESC;"
            );
        }
        get_5_rows_by_game(){
            return connection.promise().query(
                "SELECT game.name AS Game, console.name AS Console, publisher.name AS Publisher, studio.name AS Studio, rate.name AS ESRB FROM console INNER JOIN game ON game.console_id = console.id INNER JOIN publisher ON game.publisher_id = publisher.id INNER JOIN studio ON game.studio_id = studio.id INNER JOIN rate ON game.rate_id = rate.id ORDER BY game.price DESC;"
            );
        }
        add_game(game){
            return connection.promise().query
            ("INSERT INTO game SET ?",game);
        }
        add_console(console){
            return connection.promise().query
            ("INSERT INTO console SET ?",console);
        }
        add_publisher(publisher){
            return connection.promise().query
            ("INSERT INTO publisher SET ?",publisher);
        }
        add_studio(studio){
            return connection.promise().query
            ("INSERT INTO studio SET ?",studio);
        }
    }
    module.exports = Queries;

    // FILE #05: Order of creation

    //"INSERT INTO studio SET name=?;",res
    //"INSERT INTO studio (name) VALUE ?;",res
    //"INSERT INTO studio VALUE ?;",res