/**
 * main server
 * @project BEBE
 * @author LEE DONG HOON
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/
 * message module
 */

const message = {
    serverError : "server error",
    nullParam : "paramiter is null",
    idNotFounded : "can not find id",
    invaildPassword : "password is wrong",
    duplicatedParam : "paramiter is duplicated",
    success:"success"
}

module.exports = message;