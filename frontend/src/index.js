import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsApi } from './features/productsApi';
import cartReducer, { getTotals } from './features/cartSlice';

//Redux
import {Provider} from 'react-redux'
import store from "./redux/store";

// const store = configureStore({
//   // reducer:{
//   //     products:productsReducer,
//   //     cart:cartReducer,
//   //     [productsApi.reducerPath]:productsApi.reducer,

//   // },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(productsApi.middleware);
//   },

//   // cartReducer,composeWithDevTools()
// });
store.dispatch(getTotals());
store.dispatch(productsFetch());

ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('root')
);
