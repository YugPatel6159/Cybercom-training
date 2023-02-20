/*
Create a database structure for students and its college. One 
student can be on one college only.
*/
CREATE TABLE colleges
(
	college_id INT AUTO_INCREMENT,
    college_name VARCHAR(128),
    city VARCHAR(16),
    PRIMARY KEY (college_id)
);
CREATE TABLE students
(
	student_id INT AUTO_INCREMENT,
    student_name VARCHAR(128),
    contact_no VARCHAR(32),
    college_id INT,
    PRIMARY KEY (student_id),
    FOREIGN KEY (college_id) REFERENCES colleges(college_id) ON DELETE CASCADE
);
INSERT INTO colleges (college_name,city) 
VALUES ("Gec BHavnagar","Bhavnagar"),("L.D.","Ahmedabad"),("Nirma University","Ahmedabad");

INSERT INTO students (student_name,contact_no,college_id) 
VALUES ("Yug Patel",'7284021006',1),("Rutvik Machchhar",'9173794282',1),("Param Patel",'8238949574',2);

select s.student_name, c.college_name 
from students s
join colleges c
using(college_id)
group by student_name,college_name;