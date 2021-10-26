import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../../store/action";
import {FilterEnum, GuitarString} from "../../const";
import {getFilters} from "../../store/catalog/selectors";
import PropTypes from "prop-types";

const CheckboxFilter = ({arr, type}) => {
    const activeFilterValues = useSelector(getFilters);
    const dispatch = useDispatch();
    const stringsActiveFilter = [...new Set(activeFilterValues.types.flatMap((item) => GuitarString[item]))];


    const handleChangeInput = (evt) => {
        dispatch(changeFilter(type, evt.target.value, evt.target.checked));
    }

    return <div className="filter__block-item checkbox-filter">
        {arr.map((item) => {
                const isDisabled = stringsActiveFilter.length > 0 ?
                    !Boolean(1 + stringsActiveFilter.findIndex((strings) => item[1] === strings)) :
                    false;
                const isChecked = Boolean(1 + activeFilterValues[type].findIndex((option) => option === (type === FilterEnum.strings ? String(item[1]) : item[0])));

                return <Fragment key={`${item[0]}`}>
                    <input className="visually-hidden"
                           type="checkbox"
                           id={`${item[0]}-${type}`}
                           name={item[0]}
                           value={type === FilterEnum.strings ? item[1] : item[0]}
                           onChange={handleChangeInput}
                           aria-label={item[1]}
                           checked={isChecked}
                           disabled ={(type === FilterEnum.strings) ? isDisabled : false }
                    />
                    <label className="checkbox-filter__label" htmlFor={`${item[0]}-${type}`}>{item[1]}</label>
                </Fragment>
            }
        )}
    </div>
}
CheckboxFilter.propTypes = {
    arr: PropTypes.array,
    type: PropTypes.string
};

export default CheckboxFilter;
