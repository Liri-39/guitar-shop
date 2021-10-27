import {createReducer} from "@reduxjs/toolkit";
import {guitars} from "../../mocks/guitars";
import {changeSortType, changeSortMethod, changePage, changeFilter, changeFilterPrice} from "../action";
import {getMaxPrice, getMinPrice} from "../../util";
import {FilterEnum, GuitarString} from "../../const";

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
        .addCase(changeFilterPrice, (state, action) => {
            const newValue = Object.assign(state.filter.sum, {[action.payload.id]: action.payload.value});
            state.filter = (Object.assign(state.filter,newValue));
        })
        .addCase(changeFilter, (state, action) => {

            const index = state.filter[action.payload.type].findIndex((option) => option === action.payload.value);
            const newValue = (action.payload.actionType === true) ?
                [...state.filter[action.payload.type], action.payload.value] :
                [
                    ...state.filter[action.payload.type].slice(0, index),
                    ...state.filter[action.payload.type].slice(index + 1)
                ];

            state.filter = (Object.assign(state.filter, {[action.payload.type]: newValue}));

            if (action.payload.type === FilterEnum.types) {
                const stringsActiveFilter = [...new Set(state.filter.types.flatMap((item) => GuitarString[item]))];
                const strings = state.filter.strings.filter((x) => stringsActiveFilter.includes(Number(x)));
                state.filter =(Object.assign(state.filter, {strings: strings}));
            }
        })
});

export {catalog};
