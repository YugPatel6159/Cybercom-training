use practice5;
CREATE TABLE returns (
  return_id INT NOT NULL,
  order_id INT NOT NULL,
  customer_id INT NOT NULL,
  return_date DATE NOT NULL,
  PRIMARY KEY (return_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
INSERT INTO returns (return_id, order_id, customer_id, return_date)
VALUES
  (1, 1, 1, '2022-01-05'),
  (2, 2, 2, '2022-02-10'),
  (3, 3, 3, '2022-03-01'),
  (4, 4, 4, '2022-03-05');
delete from returns where return_id = 4;
-- Write a SQL query to retrieve the names of all customers 
-- who have made at least one order in the "orders" table and 
-- have not made any orders in the "returns" table.

select c.customer_name from customers c 
join orders o using(customer_id) 
join returns r using(order_id)	 
group by customer_id; 