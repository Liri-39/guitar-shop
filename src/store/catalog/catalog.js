import {createReducer} from "@reduxjs/toolkit";
import {guitars} from "../../mocks/guitars";
import {changeSortType, changeSortMethod, changePage, changeFilter} from "../action";
import {getMaxPrice, getMinPrice} from "../../util";

const initialState = {
    products: guitars,
    page: 1,
    activeSortType: ``,
    activeSortMethod: ``,
    filter: {
        sum: {
            minSum: getMinPrice(guitars),
            maxSum: getMaxPrice(guitars)
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
