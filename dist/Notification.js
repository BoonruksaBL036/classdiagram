"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(notificationId, message, status) {
        this.reacipient = [];
        this.notificationId = notificationId;
        this.message = message;
        this.status = status;
    }
    sendNotification() {
        0;
    }
    toString() {
        return `Notification= [notificationId=${this.notificationId}]`;
    }
}
exports.Notification = Notification;
