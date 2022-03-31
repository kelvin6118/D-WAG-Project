DROP TABLE IF EXISTS habitsTracked;

CREATE TABLE habitsTracked (
    id serial PRIMARY KEY,
    user_ID int,
    tracker_ID int,
    habit_ID int,
    activity_ID int
);
