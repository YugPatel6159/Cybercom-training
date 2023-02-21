/* Create a database schema for student grade system. It contains 
student data and their grade of each subject based on the 
different semester. */

CREATE TABLE student_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256),
    address VARCHAR(256)
);

CREATE TABLE Subject (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256)
);

CREATE TABLE Semester (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256)
);

CREATE TABLE Grade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject_id INT,
    semester_id INT,
    grade ENUM('A', 'B', 'C', 'D', 'F'),
    FOREIGN KEY (student_id)
        REFERENCES student_details (id),
    FOREIGN KEY (subject_id)
        REFERENCES Subject (id),
    FOREIGN KEY (semester_id)
        REFERENCES Semester (id)
)
