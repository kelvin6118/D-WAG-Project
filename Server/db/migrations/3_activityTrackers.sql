DROP TABLE IF EXISTS activityTrackers;

CREATE TABLE activityTrackers (
    id serial PRIMARY KEY,
    user_ID int NOT NULL,
    habit_ID int NOT NULL,
    frequency int NOT NULL,
    number int NOT NULL
);
