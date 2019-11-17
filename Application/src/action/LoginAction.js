import types from './Types';

export function Login(payload){
    return {
        type:types.LOGIN,
        payload : payload
    }
}

export function Logout(){
    return {
        type:types.LOGOUT
    }
}