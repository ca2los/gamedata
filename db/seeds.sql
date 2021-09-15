    INSERT INTO rate (rating)
    VALUES ("(EC) Early Childhood"),
           ("(E) Everyone"),
           ("(E+) Everyone +10"),
           ("(T) Teen"),
           ("(M) Mature"),
           ("(A) Adults +18"),
           ("(RP) Rating Pending");

    INSERT INTO game (name,year,digital,rate_id)
    VALUES ("Deathloop",2021,false,6),
           ("Final Fantasy VII",2021,false,4),
           ("Demon's Souls",2020,false,5),
           ("Spider-Man: Remastered",2020,true,4),
           ("WarioWare: Get it together!",2021,false,3),
           ("Gran Turismo Sport",2017,false,2),
           ("Ghost Of Tsushima",2021,false,6);

    INSERT INTO studio (studio,game_id)
    VALUES ("Arkane",1),
           ("Square Enix",2),
           ("Bluepoint",3),
           ("Insomniac",4),
           ("Polyphony Digital",5),
           ("Sucker Punch",6),
           ("Nintendo",7);

    INSERT INTO console (console,game_id)
    VALUES ("Play Station 5",(1,2,3,4,7)),
           ("Play Station 4",6),
           ("Nintendo Switch",7);