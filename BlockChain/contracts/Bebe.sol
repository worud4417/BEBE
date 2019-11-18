pragma solidity >=0.4.24 <=0.5.6;

import "./Ownable.sol";

contract Bebe is Ownable{
    
    event SetRecord(uint256 _maunfacturer,uint256 _name,uint256 _year,uint256 _price);
    
    struct Record{
        uint256 maunfacturer;
        uint256 name;
        uint256 year;
        uint256 price;
    }
    
    mapping (uint256=>uint256) maunfacturerCount;
    
    Record[] private records;
    
    function setRecord(uint256 _maunfacturer,uint256 _name,uint256 _year,uint256 _price) public {
        emit SetRecord(_maunfacturer,_name,_year,_price);
        records.push(Record(_maunfacturer,_name,_year,_price));
        maunfacturerCount[_maunfacturer]++;
    } 
    
    function getRecord(uint256 _maunfacturer) public view returns(uint256[] memory,uint256[] memory,uint256[] memory){
        uint256[] memory term1 = new uint256[](maunfacturerCount[_maunfacturer]);
        uint256[] memory term2 = new uint256[](maunfacturerCount[_maunfacturer]);
        uint256[] memory term3 = new uint256[](maunfacturerCount[_maunfacturer]);
        
        uint256 count = 0;
        for(uint i =0;i<records.length;i++){
            if(records[i].maunfacturer == _maunfacturer){
                term1[count] = records[i].name;
                term2[count] = records[i].year;
                term3[count] = records[i].price;
                count++;
            }
        }
        
        return (term1,term2,term3);
    }
    
    function getAllRecord()public view returns(uint256[] memory,uint256[] memory,uint256[] memory){
        uint256[] memory term1 = new uint256[](records.length);
        uint256[] memory term2 = new uint256[](records.length);
        uint256[] memory term3 = new uint256[](records.length);
        
        for(uint i =0;i<records.length;i++){
            
            
                term1[i] = records[i].name;
                term2[i] = records[i].year;
                term3[i] = records[i].price;
            
        }
        
        return (term1,term2,term3);
    }
}