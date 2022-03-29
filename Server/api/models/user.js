const db = require('../dbConfig/init');


module.exports = class User {
    constructor(data){
        this.id = data.id;
        this.username = data.username;
        this.password = data.password;
        this.displayName = data.display_name;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT users.id, users.username, users.password FROM users;')
                const users = result.rows.map(u => ({ id: u.id, username:u.username, password:u.password }));
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

    // static getUserInfo(username){
    //     return new Promise (async(resolve, reject) => {
    //         try {
    //             let userData = await db.query(`SELECT users.*, users.username as user_name, users.display_name as user_display FROM userTrackers JOIN activityTrackers ON userTrackers.activity_ID = activityTrackers.id JOIN users ON activityTrackers.user_ID = users.id WHERE userTrackers.id = $1;`, [id]);
    //             let user = new Tracker(userData.rows[0]);
    //             resolve(user);
    //         } catch (err) {
    //             reject('User not found')
    //         }
    //     });
    // }


}
