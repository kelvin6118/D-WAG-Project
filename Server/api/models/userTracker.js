const db = require('../dbConfig/init');


module.exports = class Tracker {
    constructor(data){
        this.id = data.id;
        this.activityId = data.activityId;
        this.date = data.date;
    };
}
