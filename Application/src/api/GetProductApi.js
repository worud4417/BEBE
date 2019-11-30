/**
 * react-native application
 * @project BEBE
 * @author LEE DONG HOON
 */

import url from '../resource/IpAddress';

export function fetchGetBestProduct(){
    const uri = url.url +"/productget/best";

    return fetch(uri,{
        method:"GET"
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

export function fetchGetAllProduct(_categories){
    const uri = url.url + "/productget?categories="+_categories;

    return fetch(uri,{
        method:"GET"
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

export function fetchGetProductFromBlockChain(_manufacturer){
    const uri = url.url + "/productget/blockchain?MANUFACTURER="+_manufacturer;

    return fetch(uri,{
        method:"GET"
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

export default {fetchGetBestProduct,fetchGetAllProduct,fetchGetProductFromBlockChain};