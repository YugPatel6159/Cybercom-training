/*Write an SQL query to delete all the duplicate emails, keeping 
only one unique email with the smallest id. Return the result 
table in any order.*/

create database duplicacte_email;
use duplicacte_email;

CREATE TABLE Person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(256)
);

insert into Person(email)
values ('abc@gmail.com'),('dca@gmail.com'),('abc@gmail.com');

DELETE p1 FROM Person p1,
    Person p2 
WHERE
    p1.email = p2.email AND p1.id > p2.id;


SELECT 
    *
FROM
    Person;




