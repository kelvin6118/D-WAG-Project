INSERT INTO users (username, password, display_name)
VALUES
('Graingertom', 'qwerty', 'Tom');

INSERT INTO userTrackers (activity_ID, date)
VALUES
(1, '29/03/2022');

INSERT INTO activityTrackers (user_ID, habit_ID, frequency, number)
VALUES
(1, 1, 2, 3);

INSERT INTO habits (habit_name)
VALUES
('Drink Water'),
('Sleep'),
('Read'),
('Steps');
