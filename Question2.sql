
create database test_uv;

CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(255),
  parent_id int
);

INSERT INTO users(name,parent_id) values
('Zaki',2),
('Ilham',null),
('Irwan',2),
('Arka',3);


select
    p.id,
    p.name,
    f.name
from users as p
LEFT JOIN users as f on p.parent_id = f.id ;

