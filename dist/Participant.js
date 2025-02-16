"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const User_1 = require("./User");
class Participant extends User_1.User {
    constructor(userId, name, email, password, role) {
        super(userId, name, email, password, role);
        this.activity = [];
    }
    registerForActivity() {
        0;
    }
    seachActivity(keyword) {
        return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
}
exports.Participant = Participant;
