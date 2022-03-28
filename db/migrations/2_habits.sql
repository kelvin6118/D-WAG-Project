DROP TABLE IF EXISTS habits;

CREATE TABLE user (
    id serial PRIMARY KEY,
    habit_name VARCHAR(20) NOT NULL UNIQUE
    
);
