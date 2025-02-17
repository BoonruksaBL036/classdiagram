"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    constructor(registrationId, activity, participant, status) {
        this.registrationId = registrationId;
        this.activity = activity;
        this.participant = participant;
        this.status = status;
        Registration.registrations.push(this);
    }
    getParticipant() {
        return this.participant;
    }
    setStatus(status) {
        this.status = status;
    }
    sumbitRegirtration() {
        0;
    }
    updateRegistration() {
        0;
    }
    toString() {
        return `Registration = [ registrationId = ${this.registrationId}},activity = ${this.activity},participant=${this.participant},status=${this.status}]`;
    }
}
exports.Registration = Registration;
