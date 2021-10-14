import React, {Fragment} from "react";

const CheckboxFilter = (props) => {
    return <div className="filter__block-item checkbox-filter">
        {props.arr.map((item) =>
            <Fragment key={`${item[0]}`}>
                <input className="visually-hidden"
                       type="checkbox"
                       id={`${item[0]}-checkbox`}
                       name={item[0]}
                       value={item[0]}
                       onChange={props.handleChangeInput}
                       aria-label={item[1]}
                />
                <label className="checkbox-filter__label" htmlFor={`${item[0]}-checkbox`}>{item[1]}</label>
            </Fragment>
        )}
    </div>
}

export default CheckboxFilter;
