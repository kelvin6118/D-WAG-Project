DROP TABLE IF EXISTS activityTrackers;

CREATE TABLE activityTrackers (
    id serial PRIMARY KEY,
    habit_ID int NOT NULL,
    frequency int NOT NULL,
    number int NOT NULL
);
