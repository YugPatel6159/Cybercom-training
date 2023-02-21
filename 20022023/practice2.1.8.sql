create table Person (
personId int auto_increment primary key,
lastName varchar(256) not null,
firstName varchar(256) not null
);
drop table address;
create table Address(
addressId int auto_increment primary key,
personId int ,
city varchar(256),
state varchar(256)
);

insert into person (lastName,firstName)
values ('Wang','Allen'),
('Alice','Bob');

insert into Address(personId, city, state) 
values ( 2 ,'New York City','New York'),
(3, 'LeetCode', 'California');

alter table Address
drop foreign key personId;

select p.firstName, p.lastName, a.city, a.state 
from Person p 
left join Address a
on p.personId = a.personId;