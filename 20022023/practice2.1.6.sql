/* Write an SQL query to create index on the email column.
*/

CREATE TABLE email (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(256)
);
create index email_index on email(email);
