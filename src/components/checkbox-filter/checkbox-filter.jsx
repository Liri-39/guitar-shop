import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../../store/action";
import {FilterEnum, GuitarEnum, GuitarStrings, GuitarType} from "../../const";
import {getFilters} from "../../store/catalog/selectors";

const CheckboxFilter = ({arr, type}) => {
    const activeFilterValues = useSelector(getFilters);

    const dispatch = useDispatch();


    const handleChangeInput = (evt) => {
        const index = activeFilterValues[type].findIndex((option) => option === evt.target.value);
        console.log(activeFilterValues[type]);
        console.log(evt.target.value);
        console.log(index);
        console.log(evt.target.checked);
        const newValue = (evt.target.checked === true) ?
            [...activeFilterValues[type], evt.target.value] :
            [
                ...activeFilterValues[type].slice(0, index),
                ...activeFilterValues[type].slice(index + 1)
            ];
        dispatch(changeFilter(type, newValue));
    }

    return <div className="filter__block-item checkbox-filter">
        {arr.map((item) => {

                const isChecked = Boolean(1 + activeFilterValues[type].findIndex((option) => option === (type === FilterEnum.strings ? item[1] : item[0])
                ));
                return <Fragment key={`${item[0]}`}>
                    <input className="visually-hidden"
                           type="checkbox"
                           id={`${item[0]}-${type}`}
                           name={item[0]}
                           value={type === FilterEnum.strings ? item[1] : item[0]}
                           onChange={handleChangeInput}
                           aria-label={item[1]}
                           checked={isChecked}
                    />
                    <label className="checkbox-filter__label" htmlFor={`${item[0]}-${type}`}>{item[1]}</label>
                </Fragment>
            }
        )}
    </div>
}

export default CheckboxFilter;
