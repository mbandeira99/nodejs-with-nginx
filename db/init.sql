CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255) not null, primary key (id));

INSERT INTO people (name) VALUES ('John');
