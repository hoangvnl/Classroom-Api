create table classes(
	id SERIAL primary key,
	name text not NULL
);

insert into classes (name) values ('PPT');
insert into classes (name) values ('OOP');