    DROP DATABASE IF EXISTS game_db;
    CREATE DATABASE game_db;

    USE game_db;

    CREATE TABLE rate (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30) NOT NULL
    );

    CREATE TABLE studio (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30) NOT NULL
    );

    CREATE TABLE publisher (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30) NOT NULL
    );

    CREATE TABLE console (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30) NOT NULL
    );

    CREATE TABLE game (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (60) NOT NULL,
        year INT UNSIGNED NOT NULL,
        price DECIMAL UNSIGNED NOT NULL,
        -- ID ANCHORS
        rate_id INT,
        FOREIGN KEY (rate_id) REFERENCES rate(id) ON DELETE CASCADE,
        studio_id INT,
        FOREIGN KEY (studio_id) REFERENCES studio(id) ON DELETE CASCADE,
        publisher_id INT,
        FOREIGN KEY (publisher_id) REFERENCES publisher(id) ON DELETE CASCADE,
        console_id INT,
        FOREIGN KEY (console_id) REFERENCES console(id) ON DELETE CASCADE
    );

    -- FILE #01: Order of creation