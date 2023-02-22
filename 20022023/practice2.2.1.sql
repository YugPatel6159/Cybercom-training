create database practice2case1;
use practice2case1;

CREATE TABLE Activity (
    player_id INT NOT NULL,
    device_id INT NOT NULL,
    event_date DATE NOT NULL,
    games_played INT NOT NULL,
    PRIMARY KEY (player_id , event_date)
);

insert into Activity values 
(1,2,'2016-03-01',5),
(1,2,'2016-05-02',6),
(2,3,'2017-06-25',1),
(3,1,'2016-03-02',0),
(3,4,'2018-07-03',5);

/*Question 1: Write an SQL query to report the first login date 
for each player. Return the result table in any order.
*/

SELECT 
    player_id, MIN(event_date) AS first_login
FROM
    Activity
GROUP BY player_id;

/*
Question 2: Write an SQL query to report the device that is 
first logged in for each player. Return the result table in any 
order.
*/
SELECT 
    player_id, device_id
FROM
    activity
WHERE
    (player_id , event_date) IN (SELECT 
            player_id, MIN(event_date)
        FROM
            Activity
        GROUP BY player_id);
        
/*Question 3: Write an SQL query to report for each player and 
date, how many games played so far by the player. That is, the 
total number of games played by the player until that date. 
Check the example for clarity. Return the result table in any 
order.
*/

select player_id,
    event_date, sum(gameS_played) OVER(PARTITION BY player_id ORDER BY event_date) from Activity;
 