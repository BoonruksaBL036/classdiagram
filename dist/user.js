"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, email, password, role) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    getUserId() {
        return this.userId;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getRole() {
        return this.role;
    }
    setRole(role) {
        this.role = role;
    }
    Register(email, password) {
        return true;
    }
    Login(email, password) {
        return true;
    }
    Logout() {
        return true;
    }
    toString() {
        return `User[userId=${this.userId},name=${this.name},email=${this.email},password=${this.password},role=${this.role}]`;
    }
}
exports.User = User;
