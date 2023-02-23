create table cars(
carID int auto_increment primary key,
Brand varchar(256) not null,
Model varchar(256),
Year int,
Mileage int,
Price decimal(10,2),
Available bit
);

create table customers(
customerID int auto_increment primary key,
FirstName varchar(256) not null,
LastName varchar(256) not null,
Email varchar(256),
PhoneNumber varchar(20)
);

create table Sales (
SaleID int auto_increment primary key,
CarId int not null,
CustomerID int not null,
SaleDate date,
SalePrice decimal(10,2),
foreign key(carID)references Cars(CarID),
foreign key(CustomerID)references customers(CustomerID)
);
INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Toyota', 'Corolla', 2015, 45000, 12000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Honda', 'Civic', 2018, 30000, 15000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Ford', 'Mustang', 2020, 1000, 35000.00, 0);

-- Inserting data into the "customers" table
INSERT INTO customers (FirstName, LastName, Email, PhoneNumber)
VALUES ('John', 'Doe', 'johndoe@example.com', '555-1234');

INSERT INTO customers (FirstName, LastName, Email, PhoneNumber)
VALUES ('Jane', 'Smith', 'janesmith@example.com', '555-5678');

-- Inserting data into the "sales" table
INSERT INTO sales (CarId, CustomerID, SaleDate, SalePrice)
VALUES (1, 1, '2022-02-01', 11000.00);

INSERT INTO sales (CarId, CustomerID, SaleDate, SalePrice)
VALUES (2, 2, '2022-02-15', 14000.00);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Chevrolet', 'Camaro', 2017, 25000, 28000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Tesla', 'Model S', 2019, 15000, 50000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Nissan', 'Altima', 2018, 30000, 14000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('BMW', 'X5', 2015, 60000, 32000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Mercedes-Benz', 'C-Class', 2020, 10000, 45000.00, 0);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Ford', 'Explorer', 2021, 5000, 42000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Honda', 'Accord', 2016, 40000, 12000.00, 1);

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Toyota', 'Camry', 2019, 20000, 18000.00, 0);

INSERT INTO customers (FirstName, LastName, Email, PhoneNumber)
VALUES ('John', 'Doe', 'johndoe@email.com', '555-1234');

INSERT INTO customers (FirstName, LastName, Email, PhoneNumber)
VALUES ('Jane', 'Smith', 'janesmith@email.com', '555-5678');

INSERT INTO customers (FirstName, LastName, Email, PhoneNumber)
VALUES ('Bob', 'Johnson', 'bjohnson@email.com', '555-9012');

INSERT INTO customers (FirstName, LastName, Email, PhoneNumber)
VALUES ('Amy', 'Davis', NULL, '555-3456');

INSERT INTO customers (FirstName, LastName, Email, PhoneNumber)
VALUES ('Mike', 'Lee', 'mikelee@email.com', NULL);
truncate table sales;
truncate table customers;
INSERT INTO sales (CarID, CustomerID, SaleDate, SalePrice)
VALUES (3, 3, '2022-02-05', 13500.00);

INSERT INTO sales (CarID, CustomerID, SaleDate, SalePrice)
VALUES (4, 4, '2022-02-15', 28000.00);

INSERT INTO sales (CarID, CustomerID, SaleDate, SalePrice)
VALUES (5, 1, '2022-01-01', 42000.00);

INSERT INTO sales (CarID, CustomerID, SaleDate, SalePrice)
VALUES (6, 2, '2022-02-14', 40000.00);

INSERT INTO sales (CarID, CustomerID, SaleDate, SalePrice)
VALUES (7, 4, '2022-02-18', 11500.00);

INSERT INTO sales (CarID, CustomerID, SaleDate, SalePrice)
VALUES (8, 3, '2022-01-30', 17000.00);
/*Retrieve the top 10 most expensive cars from the Cars 
table.*/
select * from cars order by Price desc limit 10;

/*Retrieve the average price of all available cars from the 
Cars table.
*/

select avg(Price) from cars;
select* from customers;
select*from cars;
select*from sales;
/* Retrieve the list of customers who have purchased a car, 
along with the total number of cars each customer has 
purchased.*/

select c.firstname, c.lastname, count(s.CustomerID) 
from customers c 
join sales s using(customerID) 
group by s.customerID;

/*Retrieve the list of customers who have not yet made a 
purchase.*/
select firstname, lastname
from customers 
where customerID not in (select customerID from sales);

/* Insert a new car into the Cars table with the following 
information: Brand='Toyota', Model='Corolla', Year=2022, 
Mileage=0, Price=20000, Available=1*/

INSERT INTO cars (Brand, Model, Year, Mileage, Price, Available)
VALUES ('Toyota', 'Corolla', 2022, 0, 20000.00, 1);

/*pdate the price of all cars in the Cars table by adding 
10% to their current price.
*/
select *, (price+(10*(price)/100)) as new_price from cars;

/* Delete all sales from the Sales table that occurred before 
January 1, 2022.*/

delete from sales where SaleDate<('2022-01-01');
