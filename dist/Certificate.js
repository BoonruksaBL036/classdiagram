"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
const Notification_1 = require("./Notification");
class Certificate {
    constructor(certificateId, participant, issuer, activity, signature, template) {
        this.certificateId = certificateId;
        this.participant = participant;
        this.issuer = issuer;
        this.activity = activity;
        this.signature = signature;
        this.template = template;
    }
    getcertificateId() {
        return this.certificateId;
    }
    generateCertificate(certificateId, participant, issuer, activity, signature, template) {
        return new Certificate(certificateId, participant, issuer, activity, signature, template);
    }
    sendNotification() {
        const notification = new Notification_1.Notification("NO1", this.participant, "เกียรติพร้อมดาวน์โหลดเเล้ว", "อนุมัติ");
        return notification;
    }
}
exports.Certificate = Certificate;
