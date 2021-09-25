-- 01. TABLE game && ROW name + TABLE console && ROW name
SELECT game.name AS Game, console.name AS Console FROM game JOIN console ON game.console_id = console.id;

-- 02. TABLE game && ROW name + TABLE publisher && ROW name
SELECT game.name AS Game, publisher.name AS Publisher FROM game JOIN publisher ON game.publisher_id = publisher.id;

-- 03. TABLE game && ROW name + TABLE studio && ROW name
SELECT game.name AS Game, studio.name AS Studio FROM game JOIN studio ON game.studio_id = studio.id;

-- 04. TABLE game && ROW name + TABLE rate && ROW name
SELECT game.name AS Game, rate.name AS ESRB FROM game JOIN rate ON game.rate_id = rate.id;

-- 05. TABLE game && ROW name + TABLE console && ROW name + TABLE publisher && ROW name
SELECT game.name AS Game, console.name AS Console, publisher.name AS Publisher
FROM console
    INNER JOIN game ON game.console_id = console.id
    INNER JOIN publisher ON game.publisher_id = publisher.id
ORDER BY game.price DESC;

-- 06. FULL TABLE (only joining data from other tables)
SELECT game.name AS Game, console.name AS Console, publisher.name AS Publisher, studio.name AS Studio, rate.name AS ESRB
FROM console
    INNER JOIN game ON game.console_id = console.id
    INNER JOIN publisher ON game.publisher_id = publisher.id
    INNER JOIN studio ON game.studio_id = studio.id
    INNER JOIN rate ON game.rate_id = rate.id
ORDER BY game.price DESC;

-- 07. FULL TABLE (same but more complete)
SELECT game.name, game.year, game.price AS Price, console.name AS Console, publisher.name AS Publisher, studio.name AS Studio, rate.name AS ESRB
FROM console
    INNER JOIN game ON game.console_id = console.id
    INNER JOIN publisher ON game.publisher_id = publisher.id
    INNER JOIN studio ON game.studio_id = studio.id
    INNER JOIN rate ON game.rate_id = rate.id
ORDER BY game.price DESC;

-- INNER JOIN:
-- https://www.sqlshack.com/learn-sql-join-multiple-tables/

/*
+-----------------------------+------+------+--------------+--------------------------------+-------------------+----------------+
| name                        | year | Game | Console      | Publisher                      | Studio            | ESRB           |
+-----------------------------+------+------+--------------+--------------------------------+-------------------+----------------+
| Demon's Souls               | 2020 |   90 | PS5          | Sony Interactive Entertainment | Bluepoint         | (A) Adults +18 |
| Ghost Of Tsushima           | 2021 |   90 | PS5          | Sony Interactive Entertainment | Sucker Punch      | (A) Adults +18 |
| Spider-Man: Remastered      | 2020 |   90 | PS5          | Sony Interactive Entertainment | Insomniac         | (T) Teen       |
| Final Fantasy VII           | 2021 |   87 | PS5          | Square Enix                    | Square Enix       | (T) Teen       |
| Deathloop                   | 2021 |   75 | PS5          | Bethesda Softworks LLC         | Arkane            | (A) Adults +18 |
| WarioWare: Get it together! | 2021 |   48 | Nintendo 3DS | Nintendo Entertainment         | Nintendo          | (E) Everyone   |
| Gran Turismo Sport          | 2017 |   20 | PS4          | Sony Interactive Entertainment | Polyphony Digital | (E) Everyone   |
+-----------------------------+------+------+--------------+--------------------------------+-------------------+----------------+
*/

-- 08. INSERT GAME (from MySQL shell)
INSERT INTO game (name,year,price,rate_id,studio_id,publisher_id,console_id) VALUES ("Death Stranding",2020,58.30,6,4,4,1);
/*
+-----------------------------+------+------+--------------+--------------------------------+--------------------+----------------+
| name                        | year | Game | Console      | Publisher                      | Studio             | ESRB           |
+-----------------------------+------+------+--------------+--------------------------------+--------------------+----------------+
| Demon's Souls               | 2020 |   90 | PS5          | Sony Interactive Entertainment | Bluepoint          | (A) Adults +18 |
| Ghost Of Tsushima           | 2021 |   90 | PS5          | Sony Interactive Entertainment | Sucker Punch       | (A) Adults +18 |
| Spider-Man: Remastered      | 2020 |   90 | PS5          | Sony Interactive Entertainment | Insomniac          | (T) Teen       |
| Final Fantasy VII           | 2021 |   87 | PS5          | Square Enix                    | Square Enix        | (T) Teen       |
| Deathloop                   | 2021 |   75 | PS5          | Bethesda Softworks LLC         | Arkane             | (A) Adults +18 |
| Death Stranding             | 2020 |   58 | PS5          | Sony Interactive Entertainment | Kojima Productions | (A) Adults +18 |
| WarioWare: Get it together! | 2021 |   48 | Nintendo 3DS | Nintendo Entertainment         | Nintendo           | (E) Everyone   |
| Gran Turismo Sport          | 2017 |   20 | PS4          | Sony Interactive Entertainment | Polyphony Digital  | (E) Everyone   |
+-----------------------------+------+------+--------------+--------------------------------+--------------------+----------------+
*/

-- 09. UPDATE GAME (from MySQL shell) *
UPDATE game SET name="Death Stranding: Director's Cut",year=2021,price=58.30,rate_id=6,studio_id=4,publisher_id=4,console_id=1 WHERE id=6;

-- 10. REMOVE GAME (from MySQL shell)
DELETE FROM game WHERE name = "Death Stranding: Director's Cut";

-- 11. INSERT GAME (from Inquirer)
INSERT INTO game (name,year,price,rate_id,studio_id,publisher_id,console_id) VALUES (?,?,?,?,?,?,?);

-- FILE #03: Order of creation