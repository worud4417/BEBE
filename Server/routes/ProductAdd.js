var express = require("express");
var router = express.Router();

const Product = require('../schema/ProductSchema');
const message = require("../util/message");
const web3 = require('../util/Web3');

router.post('/', function (req, res, next) {

    let product = new Product();

    console.log(req);

    let manufacturer = req.body.MANUFACTURER;
    let name = req.body.NAME;
    let year = req.body.YEAR;
    let imagesource = req.body.IMAGESOURCE;
    let price = req.body.PRICE;

    if (manufacturer == undefined || name == undefined || year == undefined
        || imagesource == undefined || price == undefined) {
        return res.status(400).send({ message:message.nullParam })
    }
    else {
        product.manufacturer = manufacturer;
        product.name = name;
        product.year = year;
        product.imagesource = imagesource;
        product.price = price;
        product.imagewonsanji = "";
        product.maintext = "";
        product.subtext1 = "";
        product.subtext2 = "";
        product.subtext3 = "";
        product.subtext4 = "";
        product.utong = "";
        product.certimage = "";
        product.cartegories="";

        product.save(function (err) {
            if (err) {
                return res.status(500).send({ message : message.serverError })
            }
            else {
                web3.setRecord(manufacturer,name,year,price).then(function(){
                    return res.status(200).send({message:message.success});
                })
            }
        })
    }
})

router.post('/fulladd',function(req,res,next){
    let product = new Product();

    let manufacturer = req.body.MANUFACTURER;
    let name = req.body.NAME;
    let year = req.body.YEAR;
    let imagesource = req.body.IMAGESOURCE;
    let price = req.body.PRICE;
    let imagewonsanji = req.body.IMAGEWONSANJI;
    let maintext = req.body.MAINTEXT;
    let subtext1 = req.body.SUBTEXT1;
    let subtext2 = req.body.SUBTEXT2;
    let subtext3 = req.body.SUBTEXT3;
    let subtext4 = req.body.SUBTEXT4;
    let utong = req.body.UTONG;
    let certimage = req.body.CERTIMAGE;
    let cartegories = req.body.CARTEGORIES;

    if(manufacturer == undefined || name == undefined || year == undefined || imagesource == undefined
        || price == undefined || imagewonsanji == undefined || maintext == undefined || subtext1 == undefined
        || subtext2 == undefined || subtext3 == undefined || subtext4 == undefined || utong == undefined
        || certimage == undefined || cartegories == undefined){
            return res.status(400).send({message : message.nullParam });
    }
    else{
        product.manufacturer = manufacturer;
        product.name = name;
        product.year = year;
        product.imagesource = imagesource;
        product.price = price;
        product.imagewonsanji = imagewonsanji;
        product.maintext = maintext;
        product.subtext1 = subtext1;
        product.subtext2 = subtext2;
        product.subtext3 = subtext3;
        product.subtext4 = subtext4;
        product.utong = utong;
        product.certimage = certimage;
        product.cartegories = cartegories;

        product.save(function(err){
            if(err){
                return res.status(500).send({message : message.serverError});
            }
            return res.status(201).send({message:message.success});
        })
    }
})


module.exports = router;