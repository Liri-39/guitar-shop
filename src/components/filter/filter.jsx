import React from "react";
import {GuitarType, GuitarStrings, FilterEnum} from "../../const";
import PriceFilter from "../price-filter/price-filter";
import CheckboxFilter from "../checkbox-filter/checkbox-filter";
import {sortAsc} from "../../util";


const Filter = () => {
    const strings = [...new Set(Object.values(GuitarStrings)
        .flatMap((item) => item))]
        .sort(sortAsc)
        .map((item,index) => [index,item]);

    return <div className="filter">
        <span className="filter__title">Фильтр</span>
        <div className="filter__block">
            <span className="filter__block-title">Цена, ₽</span>
            <PriceFilter/>
        </div>
        <div className="filter__block">
            <span className="filter__block-title">Тип гитар</span>
            <CheckboxFilter arr={Object.entries(GuitarType)} type={FilterEnum.types}/>
        </div>
        <div className="filter__block">
            <span className="filter__block-title">Количество струн</span>
            <CheckboxFilter arr={strings} type={FilterEnum.strings}/>
        </div>
    </div>
}

export default Filter;
