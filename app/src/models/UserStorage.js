"use strict";

const db = require("../config/db");

class UserStroage {

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
        
    }

    

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword, birthDay, email, phoneNumb) VALUES(?, ?, ?, ?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword, userInfo.birthDay, userInfo.email, userInfo.phoneNumb], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
}

module.exports = UserStroage;