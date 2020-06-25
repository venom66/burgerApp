import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';
import Button from 'react-bootstrap/Button';
import { type } from 'jquery';

const controls = [
    {label: 'Salad', type: 'salad' },
    {label: 'Bacon', type: 'bacon' },
    {label: 'Cheese', type: 'cheese' },
    {label: 'Meat', type: 'meat' },
    {label: 'Tomato', type: 'tomato' },

];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Price: <strong>{props.price.toFixed(2)} $</strong></p>
        {controls.map(crtl => (
            <BuildControl 
            key={crtl.label} 
            label={crtl.label}
            added={()=>props.ingredientAdded(crtl.type)} 
            remove={() => props.ingredientRemove(crtl.type)}
            disabled={props.disabled[crtl.type]}
            count={props.count[crtl.type]}
            />
        ))}

        <Button className="btn btn-danger"
        disabled={!props.purchesable}
        onClick={props.ordered}>ORDER NOW</Button>

    </div>
);

export default buildControls;
