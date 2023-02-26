use practice1;
CREATE TABLE employeesdb (
  empID INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  hireDate DATE NOT NULL,
  jobTitle VARCHAR(255),
  salary DECIMAL(10, 2),
  managerID INT,
  departmentID INT,
  CONSTRAINT fk_manager FOREIGN KEY (managerID) REFERENCES employeesdb(empID),
  CONSTRAINT fk_department FOREIGN KEY (departmentID) REFERENCES departments(deptID)
);

CREATE TABLE departments (
  deptID INT AUTO_INCREMENT PRIMARY KEY,
  deptName VARCHAR(255) NOT NULL,
  location VARCHAR(255)
);

INSERT INTO departments (deptName, location)
VALUES ('Sales', 'New York');

INSERT INTO departments (deptName, location)
VALUES ('Marketing', 'Chicago');

INSERT INTO employeesdb (firstName, lastName, email, phone, hireDate, jobTitle, salary, managerID, departmentID)
VALUES ('John', 'Doe', 'johndoe@email.com', '555-1234', '2022-01-01', 'Sales Manager', 75000.00, NULL, 1);

INSERT INTO employeesdb (firstName, lastName, email, phone, hireDate, jobTitle, salary, managerID, departmentID)
VALUES ('Jane', 'Smith', 'janesmith@email.com', '555-5678', '2022-02-15', 'Sales Representative', 45000.00, 1, 1);

INSERT INTO employeesdb (firstName, lastName, email, phone, hireDate, jobTitle, salary, managerID, departmentID)
VALUES ('Bob', 'Johnson', 'bjohnson@email.com', '555-9012', '2022-03-01', 'Marketing Manager', 80000.00, NULL, 2);

INSERT INTO employeesdb (firstName, lastName, email, phone, hireDate, jobTitle, salary, managerID, departmentID)
VALUES ('Amy', 'Davis', NULL, '555-3456', '2022-04-15', 'Marketing Coordinator', 50000.00, 3, 2);

/* Write a query that returns the first and last name of all 
employees who have a title that contains the word 
"Manager".*/
select firstname , lastname from employeesdb where jobTitle like '%Manager';

/*Write a query that returns the department name and the 
average salary of all employees in each department.*/

select d.deptName, avg(e.salary) from employeesdb e join departments d on e.departmentId = d.deptId group by d.deptName;

/*Write a query that returns the number of employees who were 
hired in each year, sorted by year.
*/
select count(*) from employeesdb group by year(hireDate) order by year(hireDate);

/* Write a query that returns the first name, last name, and 
salary of the top 10 highest-paid employees.*/

select firstname, lastname ,salary from employeesdb order by salary desc limit 10;

/*Write a query that updates the salary of all employees in 
the "Sales" department to be 10% higher than their current 
salary.
*/
update employeesdb set salary=(salary+(salary*10)/100) where deptName = 'sales';

/*Write a query that deletes all employees who were hired 
before the year 2000.
*/
delete from employeesdb where year(hireDate)<2000;

/* Write a query that creates a new table called 
"employee_stats" that contains the following columns: 
"department_name", "total_employees", and "average_salary". 
The table should include one row for each department.
*/

create table employee_stats(
department_name varchar(256),
total_employees int,
average_salary int
);

insert into employee_stats(
department_name, total_employees, average_salary
) select d.deptname, count(e.empId), avg(e.salary) from employeesdb e join departments d
on e.departmentId = d.deptId group by d.deptname;

select* from employee_Stats;

/* Write a query that returns the first and last name of all 
employees who have the same last name as their manager.
*/
CREATE TABLE managers (
  manager_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  hire_date DATE
);
INSERT INTO managers (manager_id, first_name, last_name, email, hire_date)
VALUES (1, 'John', 'Smith', 'mailto:john.smith@email.com', '2022-01-01'),
       (2, 'Jane', 'Doe', 'mailto:jane.doe@email.com', '2022-02-01'),
	   (3, 'David', 'Lee', 'mailto:david.lee@email.com', '2021-10-01'),
       (4, 'Maria', 'Garcia', 'mailto:maria.garcia@email.com', '2022-03-01');

select e.firstname, e.lastname from 
employeesdb e join managers m 
on e.managerId = m.manager_id 
where e.managerid is not null 
and e.lastname in (select last_name from managers);

/*Write a query that returns the top 5 departments with the 
highest average salary.*/

select d.deptname , avg(e.salary) from employeesdb e join departments d on e.departmentId = d.deptId group by deptname order by avg(e.salary) desc limit 5; 

/*Write a query that returns the first and last name of 
all employees who have at least one dependent. Sort the 
results by last name.*/
CREATE TABLE dependents (
  dependent_id INT PRIMARY KEY,
  emp_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  relationship VARCHAR(50),
  FOREIGN KEY (emp_id) REFERENCES employeesdb(empid)
);

INSERT INTO dependents (dependent_id, emp_id, first_name, last_name, relationship)
VALUES
  (1, 1, 'John', 'Smith', 'Spouse'),
  (2, 2, 'Emily', 'Smith', 'Child');
  
select firstname , lastname from employeesdb where departmentid is not null order by lastname; 
SELECT e.firstName, e.lastName
FROM employeesdb e
JOIN dependents d ON e.empid = d.emp_id
ORDER BY e.lastName;
