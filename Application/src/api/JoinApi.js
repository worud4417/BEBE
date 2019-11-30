/**
 * react-native application
 * @project BEBE
 * @author LEE DONG HOON
 */

import url from '../resource/IpAddress';

export function fetchJoin(_id,_password,_name,_callNumber,_email){
    const uri = url.url +"/userjoin";

    return fetch(uri,{
        method:"POST",
        headers:{
            Accept:"application/json",
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
            ID:_id,
            PASSWORD:_password,
            NAME:_name,
            PHONENUMBER : _callNumber,
            EMAIL : _email  
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

export default {fetchJoin};