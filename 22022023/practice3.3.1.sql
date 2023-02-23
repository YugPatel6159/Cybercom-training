
/*Consider a table called "books" with the following columns: 
"id", "title", "author", "publication_year". Write a SQL query 
to retrieve the title and author of the oldest book in the 
table.
*/
create table books(id int auto_increment ,
title varchar(256) not null,
author varchar(256) not null,
publication_year int,
primary key(id)
);

INSERT INTO books (title, author, publication_year) VALUES
  ('To Kill a Mockingbird', 'Harper Lee', 1960),
  ('Pride and Prejudice', 'Jane Austen', 1813),
  ('1984', 'George Orwell', 1949),
  ('The Catcher in the Rye', 'J.D. Salinger', 1951),
  ('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
  
  select title, author from books
  where publication_year = (select min(publication_year) from books);
  