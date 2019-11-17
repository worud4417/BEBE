import url from '../resource/IpAddress';

export function fetchLogin(_email,_password){
    const uri = url.url +"/userlogin";

    return fetch(uri,{
        method:"POST",
        headers:{
            Accept:"application/json",
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
            ID : _email,
            PASSWORD:_password 
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

export default {fetchLogin};