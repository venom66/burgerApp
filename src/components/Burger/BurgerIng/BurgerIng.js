/* eslint-disable default-case */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './BurgerIng.css'

class BurgerIng extends Component{
    render() {
    let ingredient= null;

    switch (this.props.type) {
        case ('bread-bottom'):
            ingredient = <div className="BreadBottom"></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>); 
            break;
        case ('meat'):
            ingredient = <div className="Meat"></div>;
            break;
        case ('cheese'):
            ingredient = <div className="Cheese"></div>;
            break;
        case ('bacon'):
            ingredient = <div className="Bacon"></div>;
            break;
        case ('salad'):
            ingredient = <div className="Salad"></div>;
            break;
        case ('tomato'):
            ingredient = <div className="Tomato"></div>;
            break;
        default:
            ingredient = null;
        }
    return ingredient;

    }
}

BurgerIng.propTypes = {
    type: PropTypes.string.isRequired

};

export default BurgerIng;