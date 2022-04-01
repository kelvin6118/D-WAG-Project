TRUNCATE users, userTrackers, activityTrackers, habitsTracked, habits RESTART IDENTITY;

INSERT INTO users (username, password, display_name)
VALUES
('Graingertom', 'qwerty', 'Tom');

INSERT INTO userTrackers (user_ID, habit_ID, date)
VALUES

(1, 1, '29/3/2022'),
(1, 2, '30/3/2022');


INSERT INTO activityTrackers (user_ID, habit_ID, frequency, number)
VALUES
(1, 2, 2, 3),
(1, 1, 2, 8);

INSERT INTO habitsTracked (user_ID, habit_ID, tracker_ID, activity_ID)
VALUES
(1, 1, 1, 1),
(1, 2, 2, 2);

INSERT INTO habits (habit_name)
VALUES
('Drink Water TEST'),
('Sleep TEST'),
('Read TEST'),
('Steps TEST');
