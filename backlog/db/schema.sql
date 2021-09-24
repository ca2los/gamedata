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
        name VARCHAR (30) NOT NULL,
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

    -- Displayed ONLY ON TABLE 'game': rate_id && studio_id && publisher_id && console_id
    -- Displayed ONLY ON QUERIES: rate_name && studio_name && publisher_name && console_name

    /*
        rate_name VARCHAR (30) NOT NULL,
        INDEX rate_index (rate_name),
        CONSTRAINT fk_rate FOREIGN KEY (rate_name) REFERENCES rate(name) ON DELETE CASCADE,
    */

    /*
        -- LEFT JOIN
        rate_name TEXT,
        FOREIGN KEY (rate_name) REFERENCES rate(name) ON DELETE CASCADE,
        studio_name TEXT,
        FOREIGN KEY (studio_name) REFERENCES studio(name) ON DELETE CASCADE,
        publisher_name TEXT,
        FOREIGN KEY (publisher_name) REFERENCES publisher(name) ON DELETE CASCADE,
        console_name TEXT,
        FOREIGN KEY (console_name) REFERENCES console(name) ON DELETE CASCADE
    */