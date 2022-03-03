import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsApi } from '../features/productsApi';

import allReducers from './reducers/allReducers';

const initialState = {};

const middleware = [thunk, productsApi.middleware];

const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;