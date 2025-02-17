"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const Registration_1 = require("./Registration");
class Activity {
    constructor(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, appovalRequest, certificateIssued, schedule) {
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = appovalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
        this.isDeleted = false;
        Activity.activities.push(this);
    }
    createActivity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, appovalRequest, certificateIssued, schedule) {
        return new Activity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, appovalRequest, certificateIssued, schedule);
    }
    updateActivity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, appovalRequest, certificateIssued, schedule) {
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = appovalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
    }
    getActivityName() {
        return this.activityName;
    }
    publisActivity() {
        this.status = true;
    }
    deleteActivity() {
        this.isDeleted = true;
    }
    apporveParticipant(participants) {
        for (let i = 0; i < Registration_1.Registration.registrations.length; i++) {
            for (let j = 0; j < participants.length; j++) {
                if (Registration_1.Registration.registrations[i].getParticipant().getName() == participants[j].getName()) {
                    Registration_1.Registration.registrations[i].setStatus("approved");
                }
            }
        }
        // Registration.registrations.forEach(register => register.setStatus("approved"))
    }
    generateCertificate() {
    }
}
exports.Activity = Activity;
