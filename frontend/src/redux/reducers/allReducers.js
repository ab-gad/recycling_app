import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from "../../features/productsSlice";
import cartReducer from '../../features/cartSlice';
import { productsApi } from '../../features/productsApi';

export default combineReducers({
    authReducer,
    products:productsReducer,
    cart:cartReducer,
    [productsApi.reducerPath]:productsApi.reducer,
});