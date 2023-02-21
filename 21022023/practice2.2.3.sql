/*
Write an SQL query to report the name, population, and area of 
the big countries.
*/

CREATE TABLE World (
    name VARCHAR(256) NOT NULL,
    continent VARCHAR(256) NOT NULL,
    area INT NOT NULL,
    population INT NOT NULL,
    gdp DOUBLE NOT NULL,
    PRIMARY KEY (name)
);

drop table World;

insert into World 
values('Afghanisthan','Asia', 652230 , 25500100, 20343000000),
('Albania','Europe', 28748 ,2831741, 12960000000),
('Algeria','Africa', 2381741 , 37100000, 188681000000),
('Andorra','Europe', 468 , 78115, 3712000000),
('Angola','Africa', 124670 , 20609294, 100990000000);

SELECT 
    name, population, area
FROM
    World
WHERE
    area >= 3000000
        OR population >= 25000000;