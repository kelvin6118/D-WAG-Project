DROP TABLE IF EXISTS userTrackers;

CREATE TABLE userTrackers (
    id serial PRIMARY KEY,
    activity_ID int NOT NULL,
    date DATE NOT NULL
);
