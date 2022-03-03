import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { productsFetch } from "./features/productsSlice";
import { getTotals } from './features/cartSlice';

//Redux
import {Provider} from 'react-redux'
import store from "./redux/store";

store.dispatch(getTotals());
store.dispatch(productsFetch());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
