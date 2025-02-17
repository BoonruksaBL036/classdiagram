"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const Activity_1 = require("./Activity");
const User_1 = require("./User");
class Instructor extends User_1.User {
    constructor(userId, name, email, password, role) {
        super(userId, name, email, password, role);
    }
    createActivity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, appovalRequest, certificateIssued, schedule) {
        return new Activity_1.Activity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, appovalRequest, certificateIssued, schedule);
    }
    approveParticipant() {
        return;
    }
    issueCertificate() {
        return;
    }
    searchActivity(keyword) {
        return Activity_1.Activity.activities.filter(user => user.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
}
exports.Instructor = Instructor;
