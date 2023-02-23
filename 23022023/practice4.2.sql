create database employeedata;
use employeedata;

CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  Name VARCHAR(50),
  DepartmentID INT,
  Salary DECIMAL(10, 2)
);

INSERT INTO Employees (EmployeeID, Name, DepartmentID, Salary)
VALUES (1, 'John Doe', 1, 50000.00),
       (2, 'Jane Smith', 2, 60000.00),
       (3, 'Bob Johnson', 1, 55000.00),
       (4, 'Samantha Lee', 3, 65000.00),
       (5, 'Tom Wilson', 2, 70000.00);
       
CREATE TABLE Departments (
  DepartmentID INT PRIMARY KEY,
  DepartmentName VARCHAR(50)
);

INSERT INTO Departments (DepartmentID, DepartmentName)
VALUES (1, 'Sales'),
       (2, 'Marketing'),
       (3, 'Engineering'),
       (4, 'Finance'),
       (5, 'Human Resources');
       
CREATE TABLE Salaries (
  EmployeeID INT,
  Salary DECIMAL(10, 2),
  Date DATE
);

INSERT INTO Salaries (EmployeeID, Salary, Date)
VALUES (1, 50000.00, '2022-01-01'),
       (1, 55000.00, '2023-01-01'),
       (2, 60000.00, '2022-01-01'),
       (2, 70000.00, '2023-01-01'),
       (3, 55000.00, '2022-01-01'),
       (3, 60000.00, '2023-01-01'),
       (4, 65000.00, '2022-01-01'),
       (4, 75000.00, '2023-01-01'),
       (5, 70000.00, '2022-01-01'),
       (5, 80000.00, '2023-01-01');
       
/*Write a query to return the names of all employees who work 
in the 'Sales' department.*/

select e.name from Employees e 
join Departments d 
using(departmentId)
 where d.departmentName = 'sales' ;
 
 /* Write a query to return the total number of employees in 
each department, ordered by department name.*/

select d.departmentname ,count(e.name) 
from employees e 
join departments d 
using(departmentId) 
group by d.DepartmentName 
order by d.departmentname;

/*Write a query to return the average salary for each 
department, ordered by department name.
*/
 
SELECT d.DepartmentName, AVG(e.Salary) AS AverageSalary
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
GROUP BY d.DepartmentName
ORDER BY d.DepartmentName;

 /* Write a query to return the top 10% of highest paid 
employees, ordered by salary.*/

SELECT EmployeeID, Salary
FROM Employees
ORDER BY Salary DESC
LIMIT (select count(*)*0.1 from employees);

/* Write a query to return the salary of each employee for 
their latest salary entry.*/

select e.name, s.salary from employees e 
join salaries s using(employeeID)
where s.Date = (Select max(date) from salaries) 
group by e.employeeID;

 
