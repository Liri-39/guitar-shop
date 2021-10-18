import {createReducer} from "@reduxjs/toolkit";
import {addProductToCart, changeProductCount, removeProductFromCart} from "../action";

const initialState = {
    coupon: 1,
    products: [{
        id: 13,
        code: `SO123234`,
        name: `Честер 6V`,
        type: `электрогитара`,
        rate: 28,
        strings: 6,
        price: 14900,
        webp: [`SO757575.webp`, `SO757575_2x.webp`],
        jpg: [`SO757575.jpg`, `SO757575_2x.jpg`],
        stars: 4,
        count: 1
    },
        {
            id: 14,
            code: `VO519510`,
            name: `Виолана Mix`,
            type: `акустическая гитара`,
            rate: 7,
            strings: 6,
            price: 7600,
            webp: [`SO757575.webp`, `SO757575_2x.webp`],
            jpg: [`SO757575.jpg`, `SO757575_2x.jpg`],
            stars: 4,
            count: 2
        },
    ]
};

const cart = createReducer(initialState, (builder) => {
    builder
        .addCase(addProductToCart, (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload);
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
