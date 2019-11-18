var express = require('express');
var router = express.Router();

const Product = require('../schema/ProductSchema');
const message = require("../util/message");
const web3 = require("../util/Web3");

router.get('/', function (req, res, next) {
    Product.find({}, function (err, product) {
        if (err) {
            return res.status(500).send({ message:message.serverError });
        }
        else {
            return res.status(200).send({message:message.success,product});
        }
    })
})

router.get('/best', function (req, res, next) {
    Product.find({}, 'name imagesource', { limit: 3 }, function (err, product) {
        if (err) {
            return res.status(500).send({ message:message.serverError });
        }
        else {
            return res.status(200).send({message:message.success,product});
        }
    })
})

router.get('/blockchain',function(req,res,next){
    let manufacturer = req.query.MANUFACTURER;

    web3.getRecord(manufacturer).then(function(result){
        return res.status(200).send({message:message.success,result});
    })
})

module.exports = router;