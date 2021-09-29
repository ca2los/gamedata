    USE game_db;

    INSERT INTO rate (name)
    VALUES ('(EC) Early Childhood'),
           ('(E) Everyone'),
           ('(E+) Everyone +10'),
           ('(T) Teen'),
           ('(M) Mature'),
           ('(A) Adults +18'),
           ('(RP) Rating Pending');

    INSERT INTO studio (name)
    VALUES ('Arkane'),
           ('Bluepoint'),
           ('Insomniac'),
           ('Kojima Productions'),
           ('Nintendo'),
           ('Polyphony Digital'),
           ('Square Enix'),
           ('Sucker Punch');

    INSERT INTO publisher (name)
    VALUES ('Bethesda Softworks LLC'),
           ('Nintendo Entertainment'),
           ('Square Enix'),
           ('Sony Interactive Entertainment');

    INSERT INTO console (name)
    VALUES ('PS5'),
           ('PS4'),
           ('PS3'),
           ('PS2'),
           ('PS1'),
           ('Nintendo Switch'),
           ('Nintendo 3DS'),
           ('Super Nintendo'),
           ('PC');

    INSERT INTO game (name,year,price,rate_id,studio_id,publisher_id,console_id)
    VALUES ('Deathloop',2021,74.59,6,1,1,1),
           ('Demon\'s Souls',2020,89.52,6,2,4,1),
           ('Final Fantasy VII',2021,87.03,4,7,3,1),
           ('Ghost Of Tsushima',2021,89.52,6,8,4,1),
           ('Gran Turismo Sport',2017,19.85,2,6,4,2),
           ('Spider-Man: Remastered',2020,89.52,4,3,4,1),
           ('WarioWare: Get it together!',2021,48.48,2,5,2,6);

    -- FILE #02: Order of creation