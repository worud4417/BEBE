const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

//문자열을 십진수로 변환 
//solidity의 uint는 십진수만 받음
String.prototype.decEncode = function(){
  var dec, i;

  var result = "";
  for (i=0; i<this.length; i++) {
      dec = this.charCodeAt(i).toString(10);
      result += ("000"+dec).slice(-5);
  }
  return result
}

//십진수를 문자열로 변환 
String.prototype.decDecode = function(){
  var j;
  var decs = this.match(/.{1,5}/g) || [];
  var back = "";
  for(j = 0; j<decs.length; j++) {
      back += String.fromCharCode(parseInt(decs[j], 10));
  }

  return back;
}

//.sol 파일을 컴파일하고 블록체인에 deploy시 생성되는 ABI와 주소를 이용해 contract 인스턴스 생성
//컨트렉트 주소를 가져올때 사용한 블록체인 네트워크 ID를 주의할 것 - 여기서 오류 남
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

//deploy한 스마트컨트렉트 주인 계정주소
const address = "0x11eFBEA3618576a0815a24Cb341d5BcaD1Ca59Dc";

//블록체인에 기록하는 스마트컨트렉트 함수 호출
exports.setRecord = async function setRecord(_maunfacturer,_name,_year,_price){
  //문자열을 십진수로 변환
    let maunfacturer = _maunfacturer.decEncode();
    let name = _name.decEncode();
    //숫자로 확실하게 변환
    let year = Number.parseInt(_year);
    let price = Number.parseInt(_price);

    //함수 호출(send) 블록체인에 기록은 send이용
    return await contract.methods.setRecord(maunfacturer,name,year,price).send({from:address,gas:250000}).then(function(recipt){
        console.log(recipt);
    }).catch(e=>console.log(e));
}

//블록체인에 기록된 기록 열람
//제조사 이름으로 확인
exports.getRecord = async function getRecord(_maunfacturer){
  //제조사 이름을 십진수로 변환
    let maunfacturer = _maunfacturer.decEncode();

    //함수 호출(call) 블록체인의 기록 열람은 call이용
    let result = await contract.methods.getRecord(maunfacturer).call({from:address,gas:250000},function(error,response){
        if(error){
            console.log(error);
        }
        return response;
    });

    //가져온 기록들을 이용하기 쉽게 배열로 재처리
    let recordArray = result[0].map(function(e,i){
        return [e.decDecode(),result[1][i],result[2][i]];
    });

    return recordArray;
}