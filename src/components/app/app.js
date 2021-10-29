import React from "react";
import "../../sass/style.scss";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from "../../const";
import MainScreen from "../main-screen/main-screen";
import CartScreen from "../cart-screen/cart-screen";
import EmptyPage from "../empty-page/empty-page";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoute.CATALOG}>
                    <MainScreen/>
                </Route>
                <Route exact path={AppRoute.CART}>
                    <CartScreen/>
                </Route>
                <Route>
                    <EmptyPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
