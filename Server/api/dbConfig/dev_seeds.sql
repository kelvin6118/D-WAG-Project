INSERT INTO users (username, password, display_name, habit_ID, tracker_ID, activity_ID)
VALUES
('Graingertom', 'qwerty', 'Tom', 1, 1, 1);

INSERT INTO userTrackers (habit_ID, date)
VALUES
(1, '29/03/2022');

INSERT INTO activityTrackers (habit_ID, frequency, number)
VALUES
(1, 2, 3);

INSERT INTO habits (habit_name)
VALUES
('Drink Water'),
('Sleep'),
('Read'),
('Steps');
