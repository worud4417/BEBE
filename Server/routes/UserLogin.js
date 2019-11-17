var express = require("express");
var router = express.Router();

var User = require('../schema/UserSchema');
const message = require("../util/message");

router.post('/', function (req, res, next) {
    let id = req.body.ID;
    let password = req.body.PASSWORD;

    User.findOne({ id: id },function (err, user) {
        if (err) {
            return res.status(500).send({ message : message.serverError });
        }
        else if (user == null) {
            return res.status(400).send({ message : message.idNotFounded });
        }
        else if (user.password != password) {
            return res.status(400).send({ message : message.invaildPassword });
        }
        else {
            return res.status(200).send({
                message : message.success,
                user
            });
        }
    })
});

module.exports = router;