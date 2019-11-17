import url from '../resource/IpAddress';

export function fetchAddProduct(_manufacturer,_name,_year,_imagesource,_price){
    const uri = url.url +"/productadd";

    return fetch(uri,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            MANUFACTURER : _manufacturer,
            NAME : _name,
            YEAR : _year,
            IMAGESOURCE : _imagesource,
            PRICE : _price
        })
    }).then((response)=>response.json())
    .then((responsJson)=>{
        return responsJson;
    }).catch((error)=>{
        if(error.message == "Network request failed"){
            alert("network fail");
        }
        return {error:false};
    })
}

export function fetchAddProductAllInfo(
    _manufacturer,
    _name,
    _imagesource,
    _price,
    _imagewonsanji,
    _maintext,
    _subtext1,
    _subtext2,
    _subtext3,
    _subtext4,
    _utong,
    _certimage,
    _cartegories
){
    const uri = url.url +"/productadd/fulladd";

    return fetch(uri,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            MANUFACTURER : _manufacturer,
            NAME : _name,
            YEAR : _year,
            IMAGESOURCE : _imagesource,
            PRICE : _price,
            IMAGEWONSANJI:_imagewonsanji,
            MAINTEXT : _maintext,
            SUBTEXT1 : _subtext1,
            SUBTEXT2 : _subtext2,
            SUBTEXT3 : _subtext3,
            SUBTEXT4 : _subtext4,
            UTONG : _utong,
            CERTIMAGE : _certimage,
            CARTEGORIES : _cartegories
        })
    }).then((response)=>response.json())
    .then((responsJson)=>{
        return responsJson;
    }).catch((error)=>{
        if(error.message == "Network request failed"){
            alert("network fail");
        }
        return {error:false};
    })
}