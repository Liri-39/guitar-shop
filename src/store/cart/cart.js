import {createReducer} from "@reduxjs/toolkit";
import {addProductToBasket, removeProductFromBasket} from "../action";

const initialState = {
    productsInBasket: 0,
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
        .addCase(addProductToBasket, (state, action) => {
            state.products = [...state.products, action.payload];
        })
        .addCase(removeProductFromBasket, (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload);
            console.log(index);
            console.log(action.payload);
            state.products = [
                ...state.products.slice(0, index),
                ...state.products.slice(index + 1)
            ];
        })
});

export {cart};
