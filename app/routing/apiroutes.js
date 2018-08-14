var express = require("express");
var friendslist = require('../data/friends.js')
var router = express.Router()

// module.exports = function (app) {
    router.get("/friends", function (req, res) {

        res.json(friendslist);
    });

    router.post('/friends', function (req, res) {

        var userInfo = req.body;
        console.log(userInfo.name)
        friendslist.push(userInfo);
        res.send(JSON.stringify(userInfo))

    });

    module.exports = router
// }
