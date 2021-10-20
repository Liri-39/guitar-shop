import {createReducer} from "@reduxjs/toolkit";
import {addProductToCart, changeProductCount, removeProductFromCart} from "../action";

const initialState = {
    products: []
};

const cart = createReducer(initialState, (builder) => {
    builder
        .addCase(addProductToCart, (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            if (index === -1) {
                state.products = [...state.products, action.payload];
            }
            if (index >= 0) {
                state.products[index].count = state.products[index].count + 1
            }
        })
        .addCase(removeProductFromCart, (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload);
            state.products = [
                ...state.products.slice(0, index),
                ...state.products.slice(index + 1)
            ];
        })
        .addCase(changeProductCount, (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            state.products[index].count = action.payload.count
        })
});

export {cart};
