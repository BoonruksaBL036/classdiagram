"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const Registration_1 = require("./Registration");
class Activity {
    constructor(activityId, activityName, organizer, maxParticipant, activityPreiod, registrationPeriod, approvalRequest, status, certificateIssued, instructor, certificate, schedule) {
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPreiod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.isDeleted = false;
        this.instructor = instructor;
        this.certificate = certificate;
        this.schedule = schedule;
        Activity.activities.push(this);
    }
    createActivity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, instructor, certificate, schedule) {
        return new Activity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, instructor, certificate, null);
    }
    updateActivity(activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, instructor, certificate, schedule) {
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.isDeleted = false;
        this.instructor = instructor;
        this.certificate = certificate;
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
    generateCertificate(participants) {
        for (let i = 0; i < participants.length; i++) {
            this.certificate.generateCertificate("cer1", participants[i], this.instructor, this, "", "");
        }
    }
}
exports.Activity = Activity;
