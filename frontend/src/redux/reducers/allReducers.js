import { combineReducers } from 'redux';
import authReducer from './authReducer';
import products from "./product_reducers";
import cart from "./cart_reducers";

export default combineReducers({
    authReducer,
    products:products,
    cart:cart,


});