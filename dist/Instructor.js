"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const User_1 = require("./User");
class Instructor extends User_1.User {
    constructor(userId, name, email, password, role) {
        super(userId, name, email, password, role);
    }
    createActivity() {
        return;
    }
    approvePartivipant() {
        return;
    }
    issueCertificate() {
        return;
    }
    seachActivity(keyword) {
        return 0;
    }
}
exports.Instructor = Instructor;
