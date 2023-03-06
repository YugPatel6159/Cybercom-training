create database bookstore;
use bookstore;

create table books(
id int auto_increment primary key,
title varchar(256) not null,
author_id int not null,
publication_date date not null
);
alter table books add foreign key(author_id)references authors(id);

create table authors(
id int auto_increment primary key,
name varchar(256) not null
);

create table book_categories(
id int auto_increment primary key,
name varchar(256) not null
);

create table book_category_mapping(
id int auto_increment primary key,
book_id int not null,
category_id int not null,
foreign key(book_id)references books(id),
foreign key(category_id)references book_categories(id)
);

INSERT INTO authors (name) VALUES
  ('F. Scott Fitzgerald'),
  ('Harper Lee'),
  ('George Orwell'),
  ('J.D. Salinger'),
  ('Jane Austen');
  
INSERT INTO books (title, author_id, publication_date) VALUES
  ('The Great Gatsby', 1, '1925-04-10'),
  ('To Kill a Mockingbird', 2, '1960-07-11'),
  ('1984', 3, '1949-06-08'),
  ('The Catcher in the Rye', 4, '1951-07-16'),
  ('Pride and Prejudice', 5, '1813-01-28');
  
SELECT 
    a.name, GROUP_CONCAT(bc.name separator',')
FROM
    authors a
        JOIN
    books b ON a.id = b.author_id
        JOIN
    book_category_mapping cm ON b.id = cm.book_id
        JOIN
    book_categories bc ON bc.id = cm.category_id
GROUP BY a.id;


INSERT INTO book_categories (name) VALUES
  ('Fiction'),
  ('Classic'),
  ('Dystopian');

INSERT INTO book_category_mapping (book_id, category_id) VALUES
  (1, 1),
  (1, 2),
  (2, 1),
  (2, 2),
  (3, 1),
  (3, 3),
  (4, 1),
  (4, 2),
  (5, 1),
  (5, 2);
  
  /* Write a query to find all books published in the year 2020*/
select title from books where year(publication_date) = 2020;

/* Write a query to find the name of the author who has 
written the most number of books*/

select a.name, count(a.name) 
from books b join authors a 
on b.author_id = a.id 
group by a.name 
order by count(a.name) 
desc limit 1 ;

/*Write a query to find the name of the category with the 
most number of books.
*/

select c.name from book_categories c 
join book_category_mapping m 
on c.id = m.category_id 
group by c.name 
order by count(c.name) 
desc limit 1;

/* Write a query to find the name of the author who has 
written the most number of books in the category "fiction".
*/
select a.name, count(c.name ='fiction') as count from authors a  
join books b
on b.author_id = a.id
join book_category_mapping m
on b.id =  m.book_id
join book_categories c
on m.category_id = c.id
where c.name = 'fiction'
group by a.id 
order by count(c.name = 'fiction') desc
limit 1;

/*written the most number of books in the category "fiction".
5. Write a query to find the titles of the top 5 most popular 
books. The popularity of a book is defined as the number of 
times it has been borrowed by customers. Assume that 
information about book borrowings is stored in a separate 
table called book_borrowings*/

create table customers (id int auto_increment primary key,
name varchar(256) not null
);

create table book_borrowing(
id int auto_increment primary key,
book_id int not null,
customer_id int not null,
borrow_date date not null,
foreign key(book_id) references books(id),
foreign key(customer_id)references customers(id)
);

insert into customers(name) values('Yug'),('Rutvik'),('Param');
insert into customers(name) values('Tejas'),('Savan');
truncate table book_borrowing;
INSERT INTO book_borrowing (book_id, customer_id, borrow_date)
VALUES
    (1, 1, '2022-02-01'),
    (1, 2, '2022-02-02'),
    (3, 2, '2022-02-03'),
    (4, 3, '2022-02-04'),
    (4, 3, '2022-02-05'),
    (1, 2, '2022-02-06'),
    (2, 5, '2022-02-07'),
    (3, 1, '2022-02-08'),
    (4, 5, '2022-02-09'),
    (5, 1, '2022-02-10');

select b.title, count(book_id) 
from books b join book_borrowing bb 
on b.id = bb.book_id 
group by book_id 
order by count(book_id) 
desc limit 5;


