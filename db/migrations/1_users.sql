DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id serial PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(40) NOT NULL, 
    display_name VARCHAR(20) NOT NULL
);

