/**
 * react-native application
 * @project BEBE
 * @author LEE DONG HOON
 */

import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';

export default combineReducers({
    user:LoginReducer
})