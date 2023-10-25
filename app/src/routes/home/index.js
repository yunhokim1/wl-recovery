"use strict";


const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/movie_info", ctrl.output.movie_info);
router.get("/find_id", ctrl.output.find_id);
router.get("/find_psword", ctrl.output.find_psword);
router.get("/newPsword", ctrl.output.newPsword);
router.get("/profile", ctrl.output.profile);
router.get("/delete_account", ctrl.output.delete_account);
router.get("/delete_account2", ctrl.output.delete_account2);
router.get("/settings", ctrl.output.settings);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/find_id", ctrl.process.find_id);
router.post("/find_psword", ctrl.process.find_psword);
router.post("/newPsword", ctrl.process.newPsword);
router.post("/delete_account", ctrl.process.delete_account);

module.exports = router;