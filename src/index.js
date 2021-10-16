import "normalize.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import App from './components/app/app';
import {cart} from "./store/cart/cart";
import {catalog} from "./store/catalog/catalog";
import {NameSpace} from "./const";

const store = configureStore({
    reducer: {
        [NameSpace.CART]: cart,
        [NameSpace.CATALOG]: catalog,
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
                <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
