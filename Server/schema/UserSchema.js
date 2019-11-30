/**
 * main server
 * @project BEBE
 * @author LEE DONG HOON
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/
 * define user's mongodb schema
 */

var mongoose = require("mongoose");
//mongodb plugin for primary key's auto increment
var autoIncrement = require('mongoose-auto-increment');

//set connection
var connection = mongoose.createConnection("mongodb://localhost/bebe");
//use mongoose plugin that used to auto increment primary key
autoIncrement.initialize(connection);

var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },


});

userSchema.plugin(autoIncrement.plugin, 'user');
module.exports = connection.model("user", userSchema)