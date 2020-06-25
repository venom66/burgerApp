import React from 'react';

import Aux from '../../../hoc/Aux';

const orderS = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li><span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span></li>
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Checkout</p>
        </Aux>
    )
}

export default orderS;