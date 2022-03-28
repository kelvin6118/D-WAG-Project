const db = require('../dbConfig/init');

module.exports = class Activity {
    constructor(data){
        this.id = data.id;
        this.userId = data.userId;
        this.habitId = data.habitId;
        this.frequency = data.frequency;
    };
}
