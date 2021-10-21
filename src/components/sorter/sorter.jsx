import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {changeSortType, changeSortMethod} from "../../store/action";
import {SortEnum, sortMethod, sortType} from "../../const";

const Sorter = () => {
    const {activeSortType, activeSortMethod} = useSelector((state) => state.CATALOG);

    const dispatch = useDispatch();

    const handleTypeClick = (evt) => {
        evt.preventDefault();
        dispatch(changeSortType(evt.currentTarget.id));
    };

    const handleMethodClick = (evt) => {
        evt.preventDefault();
        dispatch(changeSortMethod(evt.currentTarget.id));
        if (activeSortType.length === 0) {
            dispatch(changeSortType(SortEnum.byPrice))
        }
    };

    return <div className="sorter">
        <span className="sorter__title">Сортировать:</span>
        <div className="sorter__list">
            {Object.entries(sortType).map(([key, value]) =>
                <a className={`sorter__item ${activeSortType === key ? `sorter__item--active` : ``}`}
                   key={key}
                   id={key}
                   href="#"
                   onClick={handleTypeClick}
                >{value}</a>
            )
            }
        </div>
        <div className="sorter__buttons">
            {Object.entries(sortMethod).map(([key, value]) =>
                <button
                    className={`sorter__button sorter__button--${key} ${activeSortMethod === key ? `sorter__button--active` : ``}`}
                    key={key}
                    id={key}
                    onClick={handleMethodClick}
                    aria-label={value}
                />
            )
            }
        </div>
    </div>
}

export default Sorter;
