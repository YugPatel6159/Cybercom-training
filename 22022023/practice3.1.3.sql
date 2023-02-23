/*Write a query to retrieve the total sales for each month in the 
year 2021, sorted in ascending order by month.*/
CREATE TABLE sales (
 id INT PRIMARY KEY,
 date DATE,
 customer_id INT,
 product_id INT,
 quantity INT,
 total_price DECIMAL(10,2)
);
INSERT INTO sales (id, date, customer_id, product_id, quantity, total_price)
VALUES (1, '2021-07-15', 12, 45, 2, 17.00),
       (2, '2021-08-14', 18, 32, 1, 11.50),
       (3, '2021-08-13', 21, 56, 5, 45.00),
       (4, '2021-09-11', 9, 19, 3, 27.00),
       (5, '2020-09-12', 15, 23, 4, 36.00);
       
select month(date), sum(total_price) from sales 
where year(date) in ('2021')
group by month(date)
order by month(date) asc;