"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const Certificate_1 = require("./Certificate");
const Activity_1 = require("./Activity");
const User_1 = require("./User");
class Instructor extends User_1.User {
    constructor(userId, name, email, password, role) {
        super(userId, name, email, password, role);
    }
    createActivity(activityId, activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, schedule, certificate) {
        const newActivity = new Activity_1.Activity(activityId, activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, true, this, certificate, schedule);
        return newActivity;
    }
    approveParticipant() {
        return;
    }
    issueCertificate(participant, activity, sinature, template) {
        return new Certificate_1.Certificate("cer1", participant, this, activity, sinature, template);
    }
    searchActivity(keyword) {
        return Activity_1.Activity.activities.filter(user => user.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
}
exports.Instructor = Instructor;
