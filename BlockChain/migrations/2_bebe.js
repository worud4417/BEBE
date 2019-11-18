const Bebe = artifacts.require("./Bebe.sol");
const fs = require('fs');

module.exports = function(deployer){
    deployer.deploy(Bebe).then(()=>{
        console.log(Bebe);
    })
}