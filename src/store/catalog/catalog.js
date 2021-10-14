import {createReducer} from "@reduxjs/toolkit";
import {guitar} from "../../mocks/guitar";

const initialState = {
    products: guitar,
    page: 1,
};

const catalog = createReducer(initialState, (builder) => {
    builder
        .addCase(`changeCreditType`, (state, action) => {
            state.products = action.payload;
        })
});

export {catalog};
