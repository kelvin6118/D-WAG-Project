const db = require('../dbConfig/init');


module.exports = class Activity {
    constructor(data){
        this.id = data.id;
        this.userID = data.user_ID;
        this.habitID = data.habit_ID;
        this.frequency = data.frequency;
        this.number = data.number;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT activityTrackers.id, activityTrackers.user_ID, activityTrackers.habit_ID, activityTrackers.frequency, activityTrackers.number FROM activityTrackers;')
                const activities = result.rows.map(a => ({ id: a.id, userID: a.user_id, habitID:a.habit_id, frequency:a.frequency, number:a.number }));
                resolve(activities)
            } catch (err) {
                reject("Error getting activities")
            }
        })
    };

    static create(activityData){
        return new Promise (async (resolve, reject) => {
            try {
                const { userID, habitID, frequency, number} = activityData;
                console.log(activityData)
                let newActivity = await db.query('INSERT INTO activityTrackers (user_ID, habit_ID, frequency, number) VALUES ($1,$2,$3,$4) RETURNING *;',[userID, habitID, frequency, number]);
                let result = new Activity(newActivity.rows[0]);
                resolve (result);
            } catch (err) {
                reject('Data could not be created');
            }
        });
    };

    static findByUser(id){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT activityTrackers.user_ID, activityTrackers.habit_ID, activityTrackers.frequency, activityTrackers.number, habits.habit_name as habit_name FROM activityTrackers JOIN habits ON activityTrackers.habit_ID = habits.id WHERE activityTrackers.user_ID = $1', [ id ]);
                let user = result.rows.map(a => ({userID: a.user_id, frequency: a.frequency, number: a.number, habitID: a.habit_id, habitName: a.habit_name}));
                resolve(user);
            } catch (err) {
                reject('Activity not found!');
            }
        })
    }

}
