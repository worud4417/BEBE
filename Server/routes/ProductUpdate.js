/**
 * main server
 * @project BEBE
 * @author LEE DONG HOON
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/productupdate
 * product update router
 */

var express = require("express");
var router = express.Router();

const Product = require('../schema/ProductSchema');
const message = require("../util/message");

/**
 * product update
 * use POST
 * use JSON
 * @param _id is product's primary key
 * @param IMAGEWONSANJI is product's origin image uri
 * @param MAINTEXT is product's main description
 * @param SUBTEXT1 is product's sub description
 * @param SUBTEXT2 is product's sub description
 * @param SUBTEXT3 is proudct's sub description
 * @param SUBTEXT4 is product's sub description
 * @param UTONG is product's circulation channels's image uri
 * @param CERTIMAGE is product's certification's image uri
 */
router.post('/update', function (req, res, next) {

    let _id = req.body._ID;
    let imagewonsanji = req.body.IMAGEWONSANJI;
    let maintext = req.body.MAINTEXT;
    let subtext1 = req.body.SUBTEXT1;
    let subtext2 = req.body.SUBTEXT2;
    let subtext3 = req.body.SUBTEXT3;
    let subtext4 = req.body.SUBTEXT4;
    let utong = req.body.UTONG;
    let certimage = req.body.CERTIMAGE;

    if (_id == undefined || imagewonsanji == undefined || maintext == undefined || subtext1 == undefined
        || subtext2 == undefined || subtext3 == undefined || subtext4 == undefined || utong == undefined || certimage == undefined) {
        return res.status(400).send({ message: message.nullParam })
    }
    else {
        Product.findOne({ _id: _id }, function (err, obj) {
            if (err) {
                return res.status(500).send({ message: message.serverError })
            }
            else if (obj == null) {
                return res.status(400).send({ message: message.idNotFounded });
            }
            else {
                Product.updateOne({ _id: _id }, 
                    { 
                        imagewonsanji: imagewonsanji, 
                        maintext: maintext, 
                        subtext1: subtext1, 
                        subtext2: subtext2, 
                        ubtext3: subtext3, 
                        subtext4: subtext4,
                        utong: utong, 
                        certimage: certimage 
                    }, 
                    function (err, result) {
                        if (err) {
                            return res.status(500).send({ message : message.serverError });
                        }
                        else {
                            return res.status(201).send({ message : message.success });

                        }
                    }
                )
            }
        })
    }
})



module.exports = router;