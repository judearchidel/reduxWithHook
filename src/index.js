import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';
//import productReducer from './store/reducers/products';
//import ProductsProvider from './context/products-context';
//const rootReducer = combineReducers({
//  shop: productReducer
// });

configureStore();

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
,
  document.getElementById('root')
);
