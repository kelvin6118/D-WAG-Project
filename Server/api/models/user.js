const db = require('../dbConfig/init');


module.exports = class User {
    constructor(data){
        this.id = data.id;
        this.username = data.username;
        this.password = data.password;
        this.displayName = data.display_name;
        this.habits = { id: data.habit_id, habitName: data.habit_name};
        this.activity = { id: data.activity_id, habitID: data.activity_habit_id, frequency: data.frequency, number: data.number};
        this.tracker = { id: data.tracker_id, habitID: data.tracker_habit_id, date: data.date};
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT users.id, users.username, users.password, users.display_name FROM users;')
                const users = result.rows.map(u => ({ id: u.id, username:u.username, password:u.password, displayName: u.display_name }));
                resolve(users)
            } catch (err) {
                reject("Error getting users")
            }
        })
    };

    static findByUser(username){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT users.id, users.username, users.display_name, users.password FROM users WHERE username = $1;', [ username ]);
                let user = new User(result.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found!');
            }
        })
    }

    static findByID(id){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT users.id, users.username, users.display_name, users.password FROM users WHERE id = $1;', [ id ]);
                let user = new User(result.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found!');
            }
        })
    }



    static create(userData){
        return new Promise (async (resolve, reject) => {
            try {
                const { username, password, display_name} = userData;
                let newUser = await db.query('INSERT INTO users (username, password, display_name) VALUES ($1,$2,$3) RETURNING *;',[username, password, display_name]);
                let result = new User(newUser.rows[0]);
                resolve (result);
            } catch (err) {
                reject('User could not be created');
            }
        });
    };

    static getUserInfo(username){
        return new Promise (async(resolve, reject) => {
            try {
                let userData = await db.query(`SELECT users.*, habits.id as habit_id, habits.habit_name as habit_name, activityTrackers.id as activity_id, activityTrackers.habit_ID as activity_habit_id, activityTrackers.frequency as frequency, activityTrackers.number as number, userTrackers.id as tracker_id, userTrackers.habit_ID as tracker_habit_id, userTrackers.date as date FROM users JOIN habits ON users.habit_ID = habits.id JOIN activityTrackers ON users.activity_ID = activityTrackers.id JOIN userTrackers ON users.tracker_ID = userTrackers.id WHERE users.username = $1;`, [username]);
                let user = new User(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found')
            }
        });
    }


}
