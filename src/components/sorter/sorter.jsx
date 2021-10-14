import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {changeSortType} from "../../store/action";

const Sorter = () => {
    const {activeSortType, sortType} = useSelector((state) => state.CATALOG);

    const dispatch = useDispatch();

    const handleClick = (evt) => {
        evt.preventDefault();
        dispatch(changeSortType(evt));
    };

    return <div className="sorter">
        <span className="sorter__title">Сортировать:</span>
        <div className="sorter__list">
            <a className="sorter__item" href=""
                onClick={(evt) => handleClick(evt)}>
            по цене
            </a>
            <a className="sorter__item" href=""
                onClick={(evt) => handleClick(evt)}>
            по популярности
            </a>
        </div>
        <div className="sorter__buttons">
            <button className="sorter__button sorter__button--up"/>
            <button className="sorter__button sorter__button--down"/>
        </div>

    </div>
}

export default Sorter;
