import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    goods: 0,
};

const catalog = createReducer(initialState, (builder) => {
    builder
        .addCase(`changeCreditType`, (state, action) => {
            state.goods = action.payload;
        })
});

export {catalog};
