/**
 * main server
 * @project BEBE
 * @author LEE DONG HOON
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/
 * define product's mongodb schema
 */

var mongoose = require("mongoose");
//mongodb plugin for primary key's auto increment
var autoIncrement = require('mongoose-auto-increment');

//set connection
var connection = mongoose.createConnection("mongodb://localhost/bebe");
autoIncrement.initialize(connection);

var Schema = mongoose.Schema;

var productSchema = new Schema({
    manufacturer: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: Date,
        required: true
    },
    imagesource: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    imagewonsanji: {
        type: String
    },
    maintext: {
        type: String,

    },
    subtext1: {
        type: String

    },
    subtext2: {
        type: String
    },
    subtext3: {
        type: String
    },
    subtext4: {
        type: String
    },
    utong: {
        type: String
    },
    certimage: {
        type: String
    },
    categories:{
        type:String

        
    }
});

productSchema.plugin(autoIncrement.plugin, 'product');
module.exports = connection.model("product", productSchema)