/*Write an SQL query to report all the classes that have at least 
five students. Return the result table in any order.*/

CREATE TABLE Courses (
    student VARCHAR(256) NOT NULL,
    class VARCHAR(256) NOT NULL,
    PRIMARY KEY (student , class)
);

insert into Courses 
values ('A','Math'),('B','English'),('C','Math'),('D','Biology'),
('E','Math'),('F','Computer'),('G','Math'),('H','Math'),('I','Math');

SELECT 
    class
FROM
    Courses
GROUP BY class
HAVING COUNT(student) >= 5;
