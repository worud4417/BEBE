/**
 * main server
 * @project BEBE
 * @author LEE DONG HOON
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/userjoin
 * user join router
 */

var express = require("express");
var router = express.Router();

const message = require("../util/message");
const User = require('../schema/UserSchema');

/**
 * join user
 * use POST
 * use JSON
 * @param ID is user's id
 * @param PASSWORD is user's password
 * @param NAME is user's name
 * @param PHONENUMBER is user's phonenumber
 * @param EMAIL is user's email
 */
router.post('/', function (req, res, next) {

    let user = new User();

    let id = req.body.ID;
    let password = req.body.PASSWORD;
    let name = req.body.NAME;
    let phonenumber = req.body.PHONENUMBER;
    let email = req.body.EMAIL;

    //check empty parameter
    if(id == undefined || password ==undefined || name == undefined || phonenumber == undefined || 
        email == undefined){
            return res.status(400).send({message : message.nullParam});
    }
    else{
        User.findOne({ id: id }, function (err, obj) {
            if (err) {
                return res.status(500).send({ message : message.serverError })
            }
            else if (obj != null) {
                return res.status(400).send({ message : message.duplicatedParam })
            }
            else {
                user.id = id;
                user.password = password;
                user.name = name;
                user.phonenumber = phonenumber;
                user.email = email;
    
                user.save(function (err) {
                    if (err) {
                        return res.status(500).send({ message : message.serverError })
                    }
                    return res.status(201).send({ message : message.success })
                })
            }
        })
    }
})

module.exports = router;