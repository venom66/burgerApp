import React from 'react';
import './Burger.css';
import BurgerIng from './BurgerIng/BurgerIng';


const burger = (props) => {


    let transformedIngredients = Object.keys(props.ingredients) //extract all keys into an object 
        .map(igKey => {   //map all keys to new arrays. Arrays length = number of ingredients (2 salad, 3 cheese, etc)
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIng key={igKey + i} type={igKey} />; //populate each arrays with appropriate BurgerIngredient element
            });
        })
        //flat this array:
        .reduce((arr, el) => { //2 args: previous and current value
            return arr.concat(el);
        }, [] //initial value
        );

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className="Burger">
            <BurgerIng type="bread-top"/>
            {transformedIngredients}
            <BurgerIng type="bread-bottom"/>
            
        </div>
    );
};

export default burger;