var express = require("express");
var friendslist = require('../data/friends.js')

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {

        res.json(friendslist);
    });

    app.post('/api/friends', function (req, res) {

        var userInfo = req.body;
        console.log(userInfo.name)
        friendslist.push(userInfo);
        res.send(JSON.stringify(userInfo))

    });

}