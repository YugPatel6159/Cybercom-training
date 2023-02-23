create table employees(id int auto_increment primary key,
name varchar(256) not null, 
age int not null,
salary int not null
);
 insert into employees(name,age,salary) values ('John', 35, 60000),
 ('Mary', 27 , 50000),
 ('Peter', 42 , 75000),
 ('Olivia', 29 , 55000),
 ('Micheal', 38 , 80000);
 /*Write a SQL query to select all employees from the 
"employees" table.
*/
 select * from employees;

/* Write a SQL query to select the name and salary of all 
employees with a salary greater than 60000.
*/
select * from employees where salary>60000;

/* Write a SQL query to update Peter's age to 43.*/
set sql_safe_updates = 0;
update employees 
set age = 43 
where name = 'Peter';

/*Write a SQL query to delete the employee with the id of 4.*/

delete from employees where id = 4;

/*Write a SQL query to calculate the average salary of all 
employees*/

select avg(salary) from employees;

/* Write a SQL query to select the name and age of the oldest 
employee*/

select name, age from employees where age = (select max(age) from employees);

/*Write a SQL query to select the name and age of the 
youngest employee.
*/
select name, age from employees where age = (select min(age) from employees);

/* Write a SQL query to select the name of the employee with 
the highest salary*/
select name, age from employees where salary = (select max(salary) from employees);
