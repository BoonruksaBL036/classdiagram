"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
class Instructor {
    constructor(userId, name, email, password, role) {
        super(userId, name, email, password, role);
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
exports.Instructor = Instructor;
