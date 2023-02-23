create table inventory(
id int auto_increment primary key,
name varchar(255),
quantity int, 
price decimal(10,2),
category varchar(50)
);
INSERT INTO inventory (name, quantity, price, category)
VALUES ('Pencils', 10, 3.50, 'Stationery'),
       ('Stapler', 5, 5.50, 'Stationery'),
       ('Laptop', 2, 700.00, 'Electronics'),
       ('Mouse', 10, 15.00, 'Electronics'),
       ('Chair', 10, 50.00, 'Furniture');
select name, price from inventory where quantity>0 and category = 'electronics'
order by price desc;