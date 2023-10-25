"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req,res) => {
        res.render("home/login");
    },

    register: (req,res) => {
        res.render("home/register");
    },

    movie_info: (req,res) => {
        res.render("home/movie_info");
    },

    find_id: (req,res) => {
        res.render("home/find_id");
    },

    find_psword: (req,res) => {
        res.render("home/find_psword");
    },

    newPsword: (req,res) => {
        res.render("home/newPsword");
    },

    profile: (req,res) => {
        res.render("home/profile");
    },

    delete_account: (req,res) => {
        res.render("home/delete_account");
    },

    delete_account2: (req,res) => {
        res.render("home/delete_account2");
    },

    settings: (req,res) => {
        res.render("home/settings");
    }
};



const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    find_id: async (req, res) => {
        const user = new User(req.body);
        const response = await user.find_id();
        return res.json(response);
    },

    find_psword: async (req, res) => {
        const user = new User(req.body);
        const response = await user.find_psword();
        return res.json(response);
    },

    newPsword: async (req, res) => {
        const user = new User(req.body);
        const response = await user.newPsword();
        return res.json(response);
    },

    delete_account: async (req, res) => {
        const user = new User(req.body);
        const response = await user.delete_account();
        return res.json(response);
    },

    delete_account2: async (req, res) => {
        const user = new User(req.body);
        const response = await user.delete_account2();
        return res.json(response);
    }
    
};

module.exports = {
    output,
    process,
};