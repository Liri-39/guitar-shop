import {createReducer} from "@reduxjs/toolkit";
import {guitar} from "../../mocks/guitar";
import {changeSortType, changeSortMethod, changePage, changeFilter} from "../action";
import {getMaxPrice, getMinPrice} from "../../util";

const initialState = {
    products: guitar,
    page: 1,
    activeSortType: ``,
    activeSortMethod: ``,
    filter: {
        sum: {
            minSum: getMinPrice(guitar),
            maxSum: getMaxPrice(guitar)
        },
        types: [],
        strings:[]
    }
};

const catalog = createReducer(initialState, (builder) => {
    builder
        .addCase(changeSortType, (state, action) => {
            state.activeSortType = action.payload;
        })
        .addCase(changeSortMethod, (state, action) => {
            state.activeSortMethod = action.payload;
        })
        .addCase(changePage, (state, action) => {
            state.page = Number(action.payload);
        })
        .addCase(changeFilter, (state, action) => {
            state.filter = (Object.assign(state.filter, action.payload));
        })
});

export {catalog};
