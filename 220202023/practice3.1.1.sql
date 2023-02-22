create database parctice3;
use parctice3;
drop table customers;
create table customers (
id int auto_increment primary key,
name text not null,
email text not null,
created_at timestamp
);

 insert into customers(name, email, created_at) values
 ('John Smith', 'johnsmith@gmail.com', '2022-01-01 10:00:00'),
 ('Jane Doe', 'janedoe@gmail.com', '2022-01-02 11:00:00'),
 ('Bob Johnson', 'bobjohnson@gmail.com', '2022-01-03 12:00:00'),
 ('Sarah Lee', 'sarahlee@gmail.com', '2022-01-04 13:00:00'),
 ('David Kim', 'davidkim@yahoo.com', '2022-01-05 14:00:00');
 select * from customers;
 /* Write a query that selects all customers whose email 
address ends with "@gmail.com".
*/

 select * from customers where email like '%@gmail.com';
 
 /* Write a query that selects the customer with the earliest 
created_at date.
*/

select * 
from customers
where date(created_at) = (select min(date(created_at)) from customers);

/*Write a query that selects the name and email of customers 
who were created on or after January 3, 2022.*/

select name, email from customers where date(created_at) >= '2022-01-03'; 

/* Write a query that updates the email address of the 
customer with id=5 to "davidkim@gmail.com".*/

update customers set email = 'davidkim@gmail.com' where id = 5;
select * from customers;

/*Write a query that deletes the customer with id=2.*/

delete from customers where id = 2;
select * from customers;

/* Write a query that calculates the total number of customers 
in the "customers" table.*/

select count(distinct name) as total_customers from customers;

