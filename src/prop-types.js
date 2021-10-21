import PropTypes from "prop-types";

export const productPropTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        webp: PropTypes.arrayOf(PropTypes.string).isRequired,
        jpg: PropTypes.arrayOf(PropTypes.string).isRequired,
        stars: PropTypes.number.isRequired
    })
};
