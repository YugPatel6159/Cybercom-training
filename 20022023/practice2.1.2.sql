/*Write an SQL query to report the movies with an odd-numbered 
ID and a description that is not "boring". Return the result 
table ordered by rating in descending order.
*/

create database movie_review;

use movie_review;

create table Cinema(
id int auto_increment ,
movie varchar(256),
description varchar(256),
rating float(6),
primary key(id)
);

insert into Cinema (movie, description, rating) 
value ('War','great 3D',8.9),
('Science','fiction',8.5),
('irish','boring',6.2),
('Ice song','fantacy',8.6),
('House card','Interesting',9.1);

select id, movie, description, rating 
from Cinema 
where  mod(id,2) <> 0 AND description !='boring'
order by rating desc;