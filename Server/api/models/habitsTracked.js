const db = require('../dbConfig/init');

module.exports = class HabitsTracked {
    constructor(data){
        this.id = data.id,
        this.userID = data.user_ID,
        this.trackerID = data.tracker_ID,
        this.habitID = data.habit_ID,
        this.activityID = data.activity_ID,
        this.userInfo = {id: data.user_id, username: data.username, displayName: data.displayName},
        this.habits = { id: data.habit_id, habitName: data.habit_name},
        this.activity = { id: data.activity_id, habitID: data.activity_habit_id, frequency: data.frequency, number: data.number},
        this.tracker = { id: data.tracker_id, habitID: data.tracker_habit_id, date: data.date}
    };

    static getHabitsTracked(id){
        return new Promise (async(resolve, reject) => {
            try {
                let userData = await db.query(`SELECT habitsTracked.*, users.id as user_id, users.username as username, users.display_name as displayName, habits.id as habit_id, habits.habit_name as habit_name, activityTrackers.id as activity_id, activityTrackers.habit_ID as activity_habit_id, activityTrackers.frequency as frequency, activityTrackers.number as number, userTrackers.id as tracker_id, userTrackers.habit_ID as tracker_habit_id, userTrackers.date as date FROM habitsTracked JOIN users ON habitsTracked.user_ID = users.id JOIN habits ON habitsTracked.habit_ID = habits.id JOIN activityTrackers ON habitsTracked.activity_ID = activityTrackers.id JOIN userTrackers ON habitsTracked.tracker_ID = userTrackers.id WHERE habitsTracked.user_ID = $1`, [id])
                let user = userData.rows.map(u => ({
                    id: u.id,
                    userID : u.user_ID,
                    trackerID : u.tracker_ID,
                    habitID : u.habit_ID,
                    activityID : u.activity_ID,
                    userInfo : {id: u.user_id, username: u.username, displayName: u.displayname},
                    habits : { id: u.habit_id, habitName: u.habit_name},
                    activity : { id: u.activity_id, habitID: u.activity_habit_id, frequency: u.frequency, number: u.number},
                    tracker : { id: u.tracker_id, habitID: u.tracker_habit_id, date: u.date} }))
                console.log(userData)
                resolve(user)
            } catch (err) {
                reject('User not found')
            }
        });
    }
}


