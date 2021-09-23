    INSERT INTO rate (rating)
    VALUES ("(EC) Early Childhood"),
           ("(E) Everyone"),
           ("(E+) Everyone +10"),
           ("(T) Teen"),
           ("(M) Mature"),
           ("(A) Adults +18"),
           ("(RP) Rating Pending");

    INSERT INTO game (name,year,console,brand,digital,price,rate_id)
    VALUES ("Deathloop",2021,"PS5","Sony",false,55,6),
           ("Final Fantasy VII",2021,"PS5","Sony",false,50,4),
           ("Demon's Souls",2020,"PS5","Sony",false,60,5),
           ("Spider-Man: Remastered",2020,"PS5","Sony",true,50,4),
           ("WarioWare: Get it together!",2021,"Switch","Nintendo",false,45,3),
           ("Gran Turismo Sport",2017,"PS4","Sony",false,70,2),
           ("Ghost Of Tsushima",2021,"PS5","Sony",false,60,6);

    INSERT INTO studio (studio_creator,game_id)
    VALUES ("Arkane",1),
           ("Square Enix",2),
           ("Bluepoint",3),
           ("Insomniac",4),
           ("Polyphony Digital",5),
           ("Sucker Punch",6),
           ("Nintendo",7);