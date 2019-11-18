const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

String.prototype.hexEncode = function(){
    var hex, i;

    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}

String.prototype.hexDecode = function(){
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}

const contract = new web3.eth.Contract(
    [
        {
          "constant": false,
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isOwner",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "_maunfacturer",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_name",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_year",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_price",
              "type": "uint256"
            }
          ],
          "name": "SetRecord",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_maunfacturer",
              "type": "uint256"
            },
            {
              "name": "_name",
              "type": "uint256"
            },
            {
              "name": "_year",
              "type": "uint256"
            },
            {
              "name": "_price",
              "type": "uint256"
            }
          ],
          "name": "setRecord",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_maunfacturer",
              "type": "uint256"
            }
          ],
          "name": "getRecord",
          "outputs": [
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getAllRecord",
          "outputs": [
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
    ],
    "0xe0ebd7775a96904ab81408692ff769b1af28ea52"
);

const address = "0x11eFBEA3618576a0815a24Cb341d5BcaD1Ca59Dc";

exports.setRecord = async function setRecord(_maunfacturer,_name,_year,_price){
    let maunfacturer = _maunfacturer.hexEncode();
    let name = _name.hexEncode();
    let year = Number.parseInt(_year);
    let price = Number.parseInt(_price);

    return await contract.methods.setRecord(maunfacturer,name,year,price).send({from:address,gas:250000}).then(function(recipt){
        console.log(recipt);
    }).catch(e=>console.log(e));
}

exports.getRecord = async function getRecord(_maunfacturer){
    let maunfacturer = _maunfacturer.hexEncode();

    let result = await contract.methods.getRecord(maunfacturer).call({from:address,gas:250000},function(error,response){
        if(error){
            console.log(error);
        }
        return response;
    });

    let recordArray = result[0].map(function(e,i){
        return [e.hexDecode(),result[1][i],result[2][i]];
    });

    return recordArray;
}