/* Create a database structure for employee leave application. It 
should include all the employee's information as well as their 
leave information.*/

create database employee_leave_application;
use employee_leave_application;

create table Employee(
id int auto_increment primary key,
name varchar(256) not null,
job_title varchar(256) not null,
salary int
);

create table Leave_application(
id int auto_increment primary key,
emp_id int, 
reason varchar(256) not null,
foreign key(emp_id) references employee(id)
);



