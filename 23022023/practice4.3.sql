create database userOrders;
use userOrders;

CREATE TABLE users (
  id int PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP 
  );
  
  CREATE TABLE orders (
  id int PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  amount FLOAT NOT NULL,
  created_at TIMESTAMP ,
  updated_at TIMESTAMP 
);
/*Create a new user with the following information:
name: John Doe
email: john.doe@example.com
password: 123456
created_at: current timestamp
updated_at: current timestamp*/

insert into users (id,name, email, password, created_at, updated_at)
values (1,'John Doe', 'john.doe#gmail.com','123456', now(), now());
INSERT INTO users (id,name, email, password, created_at, updated_at)
VALUES (2,'John Doe', 'johndoe@example.com', 'mypassword', '2022-02-22 12:00:00', '2022-02-22 12:00:00'),
       (3,'Jane Smith', 'janesmith@example.com', 'mypassword2', '2022-02-22 12:00:00', '2022-02-22 12:00:00'),
       (4,'Bob Johnson', 'bobjohnson@example.com', 'mypassword3', '2022-02-22 12:00:00', '2022-02-22 12:00:00');
select * from users;  
INSERT INTO orders (id, user_id, amount, created_at, updated_at)
VALUES (1, 1, 10.50, '2022-02-22 12:00:00', '2022-02-22 12:00:00'),
       (2, 2, 25.00, '2022-02-22 12:00:00', '2022-02-22 12:00:00'),
       (3, 3, 5.99, '2022-02-22 12:00:00', '2022-02-22 12:00:00'),
       (4, 2, 15.99, '2022-02-23 10:00:00', '2022-02-23 10:00:00'),
       (5, 3, 8.75, '2022-02-23 11:00:00', '2022-02-23 11:00:00'),
       (6, 1, 12.50, '2022-02-23 12:00:00', '2022-02-23 12:00:00');
       
/*Retrieve the names and email addresses of all users who 
have placed at least one order.*/

select u.name , u.email from users u join orders o on u.id = o.user_id group by o.user_id;

/*Retrieve the total amount of orders placed by each user, 
sorted in descending order of total amount.
*/

select u.name, sum(o.amount) from orders o join users u on o.user_id = u.id group by user_id;

/* Retrieve the email address of the user who has placed the 
most orders.
*/
select * from orders;
select u.email, count(user_id) from users u join orders o on u.id = o.user_id group by o.user_id order by o.user_id desc limit 1;

/* Retrieve the user IDs and the total amount of orders placed 
by users who have placed at least one order and whose total 
amount of orders exceeds $100.
*/

select user_id , sum(amount) from orders group by user_id having sum(amount)>25 and count(user_id)>=1;

/*Retrieve the number of users who have not placed any 
orders.
*/
select count(u.name) from users u left join orders o on u.id = o.user_id where u.id not in (select distinct user_id from orders) group by u.name; 

/* Update the user with ID 1 to change their email address to 
"jane.doe@example.com".*/

update users
set email = 'jane.doe@example.com' 
where id =1;

/* Delete all orders placed by users whose email address 
contains the string "test".
*/
set SQL_safe_updates =0;
delete from users where id in (select distinct user_id from orders) and email like '%test%';

 /* Retrieve the total amount of orders placed on each day of 
the current week, grouped by day.*/
insert into orders values (7, 1, 12.50, '2023-02-23 12:00:00', '2023-02-23 12:00:00');
insert into orders values (8, 3, 12.50, '2023-02-23 12:00:00', '2023-02-23 12:00:00'),(9, 3, 12.50, '2023-02-23 12:00:00', '2023-02-23 12:00:00'),(10, 3, 12.50, '2023-02-23 12:00:00', '2023-02-23 12:00:00');
select  sum(amount), day(created_at)
from orders
where week(created_at) = week(current_date) 
and 
year(created_at) = year(current_date) 
group by day(created_at) 
order by day(created_at);

/*Retrieve the IDs and email addresses of users who have 
placed an order in the current year and whose email address 
is in the format "example.com".*/

select u.id , u.email from users u join orders o on u.id = o.user_id where year(o.created_at) = year(current_date) and email like '%example.com';
