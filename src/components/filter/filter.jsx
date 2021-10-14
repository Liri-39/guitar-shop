import React from "react";
import {useSelector} from "react-redux";
import {GuitarType, GuitarStrings} from "../../const";
import PriceFilter from "../price-filter/price-filter";
import CheckboxFilter from "../checkbox-filter/checkbox-filter";
import {sortAsc} from "../../util";


const Filter = () => {
    const {products} = useSelector((state) => state.CATALOG);
    const strings = [...new Set(Object.values(GuitarStrings).flatMap((item) => item))].sort(sortAsc).map((item,index) => [index,item]);
    const types = Object.entries(GuitarType).map((item) => [item[0], item[1]]);
    console.log(types);
    console.log(strings);
    const handleChangeInput = (evt) => {

    }

    return <div className="filter">
        <span className="filter__title">Фильтр</span>
        <div className="filter__block">
            <span className="filter__block-title">Цена, ₽</span>
            <PriceFilter handleChangeInput={handleChangeInput}/>
        </div>
        <div className="filter__block">
            <span className="filter__block-title">Тип гитар</span>
            <CheckboxFilter arr={Object.entries(GuitarType)} handleChangeInput={handleChangeInput}/>
        </div>
        <div className="filter__block">
            <span className="filter__block-title">Количество струн</span>
            <CheckboxFilter arr={strings} handleChangeInput={handleChangeInput}/>
        </div>
        <button className="filter__button">показать</button>
    </div>
}

export default Filter;
