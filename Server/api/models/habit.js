const db = require('../dbConfig/init');

module.exports = class Habit {
    constructor(data){
        this.id = data.id;
        this.habitName = data.habitName;
    };
}
