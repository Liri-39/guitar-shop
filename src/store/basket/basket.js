import {createReducer} from "@reduxjs/toolkit";
import {changeBasket} from "../action";

const initialState = {
    goodsInBasket: 0,
};

const basket = createReducer(initialState, (builder) => {
    builder
        .addCase(changeBasket, (state, action) => {
            state.goodsInBasket = action.payload;
        })
});

export {basket};
