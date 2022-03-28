DROP TABLE IF EXISTS userTracker;

CREATE TABLE userTracker (
    id serial PRIMARY KEY,
    activity_ID int NOT NULL,
    date DATE NOT NULL
);
