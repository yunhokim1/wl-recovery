"use strict";

const db = require("../config/db");

class UserStroage {

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
        
    }

    

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword, birthDay, email, phoneNumb) VALUES(?, ?, ?, ?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword, userInfo.birthDay, userInfo.email, userInfo.phoneNumb], (err) => {
                if (err) {
                    reject(`${err}`);
                }
                else resolve({ success: true });
            });
        });
    }

    static find_id(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE name = ? and birthDay = ? and email = ?;";
            db.query(query, [userInfo.name, userInfo.birthDay, userInfo.email], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static find_psword(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ? and name = ? and birthDay = ? and email = ?;";
            db.query(query, [userInfo.id, userInfo.name, userInfo.birthDay, userInfo.email], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static async newPsword(userInfo){
        return new Promise((resolve, reject) => {
            const query = "UPDATE users SET psword = ? WHERE id = ?;";
            db.query(query, [userInfo.psword, userInfo.id], (err) => {
                if (err) {
                    reject(`${err}`);
                } else {
                    resolve({ success: true });
                }
            });
        });
    }

    static delete_account(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM users WHERE id = ?;";
            db.query(query, [userInfo.id], (err) => {
                if (err) {
                    reject(`${err}`);
                }
                else resolve({ success: true });
            });
        });
    }
}

module.exports = UserStroage;