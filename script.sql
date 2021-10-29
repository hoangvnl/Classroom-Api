set transaction read write;
create table classes(
	id SERIAL not null primary key,
	name text not null
);

insert into classes (name) values ('PPT');
insert into classes (name) values ('PTUDW');