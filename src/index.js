import "normalize.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "./browser-history";
import App from './components/app/app';
import {basket} from "./store/basket/basket";
import {catalog} from "./store/catalog/catalog";
import {NameSpace} from "./const";

const store = configureStore({
    reducer: {
        [NameSpace.BASKET]: basket,
        [NameSpace.CATALOG]: catalog,
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter history={browserHistory}>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
