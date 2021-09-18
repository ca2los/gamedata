    DROP DATABASE IF EXISTS game_db;
        CREATE DATABASE game_db;
        USE game_db;

    CREATE TABLE rate (
        id_rate INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        rating VARCHAR (30) NOT NULL
    );

    CREATE TABLE game (
        id_game INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30),
        year INT NOT NULL,
        console VARCHAR (30),
        brand VARCHAR (30),
        digital BOOLEAN,
        price INT NOT NULL,
        rate_id INT,
        FOREIGN KEY (rate_id) REFERENCES rate(id_rate) ON DELETE SET NULL
    );

    CREATE TABLE studio (
        id_studio INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        studio_creator VARCHAR (30),
        game_id INT,
        FOREIGN KEY (game_id) REFERENCES game(id_game) ON DELETE SET NULL
    );