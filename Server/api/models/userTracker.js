const db = require('../dbConfig/init');
const User = require('./user');


module.exports = class Tracker {
    constructor(data, frequency){
        this.id = data.id;
        this.activityId = data.activityId;
        this.date = data.date;
        this.userinfo = { user: data.user_name, displayName: data.user_display}
    };

    static getUserInfo(id){
        return new Promise (async(resolve, reject) => {
            try {
                let userData = await db.query(`SELECT userTrackers.*, users.username as user_name, users.display_name as user_display FROM userTrackers JOIN activityTrackers ON userTrackers.activity_ID = activityTrackers.id JOIN users ON activityTrackers.user_ID = users.id WHERE userTrackers.id = $1;`, [id]);
                let user = new Tracker(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found')
            }
        });
    }
}
