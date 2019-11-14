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

export default {fetchGetBestProduct};