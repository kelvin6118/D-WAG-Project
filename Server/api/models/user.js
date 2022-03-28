const db = require('../dbConfig/init');

module.exports = class User {
    constructor(data){
        this.id = data.id;
        this.username = data.username;
        this.password = data.password;
        this.displayName = data.displayName;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT users.username, users.password FROM users;')
                const users = result.rows.map(u => ({ username:u.username, password:u.password }));
                resolve(users)
            } catch (err) {
                reject("Error getting users")
            }
        })
    };

    static findByUser(username){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM users WHERE username = $1;', [ username ]);
                let user = new User(result.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found!');
            }
        })
    }
}
