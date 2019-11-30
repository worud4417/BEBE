/**
 * main server
 * @project BEBE
 * @author LEE DONG HOON
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/productget
 * get product info router
 */

var express = require('express');
var router = express.Router();

const Product = require('../schema/ProductSchema');
const message = require("../util/message");
const web3 = require("../util/Web3");

/**
 * get product's all info
 * use GET
 * use JSON
 */
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

/**
 * get top 3 product's info
 * use GET
 * use JSON
 */
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

/**
 * get product's blockchain info
 * use GET
 * use JSON
 * @param MANUFACTURER is product's manufacturer
 */
router.get('/blockchain',function(req,res,next){
    let manufacturer = req.query.MANUFACTURER;

    web3.getRecord(manufacturer).then(function(result){
        return res.status(200).send({message:message.success,result});
    })
})

module.exports = router;