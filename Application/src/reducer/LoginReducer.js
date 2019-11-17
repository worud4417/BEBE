import types from '../action/Types';

let user = {
    info:null,
    isLogined : false
}

export default (state = user, action) => {
    switch(action.type){
        case types.LOGIN:
            state.info = action.payload;
            state.isLogined = true;
            return state;
        case types.LOGOUT:
            state.info = null;
            state.isLogined = false;
            return state
        default:
            return state;
    }
}