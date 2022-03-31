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

}
