/* Write an SQL query to swap all 'f' and 'm' values (i.e., 
change all 'f' values to 'm' and vice versa) with a single 
update statement and no intermediate temporary tables.Note 
that you must write a single update statement, do not write 
any select statement for this problem.
*/

create database swap;
use swap;
create table salary (
id int auto_increment primary key,
name varchar(256),
sex enum('m','f'),
salary int
);

insert into salary(name, sex, salary)
values ('A','m',2500),
('B','f',5500),
('C','m',1500),
('D','f',500);
set sql_safe_updates = 0;
UPDATE salary 
SET 
    sex = CASE sex
        WHEN 'm' THEN 'f'
        WHEN 'f' THEN 'm'
        ELSE sex
    END
WHERE
    sex IN ('m' , 'f'); 
select * from salary;