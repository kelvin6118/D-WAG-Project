const db = require('../dbConfig/init');

module.exports = class Habits {
    constructor(data){
        this.id = data.id;
        this.habit_name = data.habit_name;
    }
    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT id, habit_name FROM habits;')
                const habits = result.rows.map(h => ({ id: h.id, habit_name: h.habit_name}));
                resolve(habits)
            } catch (err) {
                reject("Error gettings habits")
            }
        })
    }
}
