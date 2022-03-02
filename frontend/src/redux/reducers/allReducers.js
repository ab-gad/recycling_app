import { combineReducers } from 'redux';
import authReducer from './authReducer';
import products from "./product_reducers";


export default combineReducers({
    authReducer,
    products:products,

});