"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
class Certificate {
    constructor(certificateId, signature, template) {
        this.recipient = [];
        this.issuer = [];
        this.activity = [];
        this.certificateId = certificateId;
        this.signature = signature;
        this.templete = template;
    }
    generateCertificate() {
        0;
    }
    sendNotification() {
        0;
    }
}
exports.Certificate = Certificate;
