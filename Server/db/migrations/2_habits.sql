DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit_name VARCHAR(20) NOT NULL UNIQUE
);
