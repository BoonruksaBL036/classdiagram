"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const Activity_1 = require("./Activity");
const Registration_1 = require("./Registration");
const User_1 = require("./User");
class Participant extends User_1.User {
    constructor(userId, name, email, password, role) {
        super(userId, name, email, password, role);
    }
    getName() {
        return this.getName();
    }
    registerForActivity(activity) {
        return new Registration_1.Registration(1, activity, this, "Pending");
    }
    searchActivity(keyword) {
        return Activity_1.Activity.activities.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
    downloadCertificate() {
        return "ดาวน์โหลด certificate แล้ว";
    }
    toString() {
        return `Participant=[User=${super.toString()}]`;
    }
}
exports.Participant = Participant;
