/*Write an SQL query to report all customers who never order 
anything. Return the result table in any order.
*/

use duplicacte_email;

CREATE TABLE Customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256)
);
drop table Orders;

CREATE TABLE Orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customerId INT,
    FOREIGN KEY (customerId)
        REFERENCES Customers (id)
        ON DELETE CASCADE
); 

insert into Customers (name)
values ('joe'),('Henry'),('Sam'),('Max');

SELECT 
    *
FROM
    Customers;

insert into Orders (customerId)
values (3),(1);

CREATE TABLE output (
    name VARCHAR(20)
);

insert into output
select c.name as Customers 
from Customers c
join Orders o
on c.id = o.customerId;

SELECT 
    name
FROM
    Customers
WHERE
    name NOT IN (SELECT 
            name
        FROM
            output); 

