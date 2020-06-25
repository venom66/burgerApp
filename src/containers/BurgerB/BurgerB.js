import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderS/OrderS'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.7,
    tomato: 0.2

}

class BurgerB extends Component {
    state = {
        ingredients:{
            tomato: 0,
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
            
        },
        totalPrice: 4,
        purchesable: false,
        purchasing: false

    }

    updatePurchaseState (ingredients) {

        // if(this.state.tomato ||
        // this.state.salad ||
        // this.state.bacon ||
        // this.state.cheese ||
        // this.state.meat > 0) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchesable: sum > 0})
    }

    addIngredienHander = (type) =>{
        const oldCount = this.state.ingredients[type];
        // console.log(oldCount);
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingredients[type]; // existing state
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    render () {
        const disableInfo = {
            ...this.state.ingredients
        }

        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded={this.addIngredienHander}
                ingredientRemove={this.removeIngridientHandler}
                purchesable={this.state.purchesable}
                disabled={disableInfo}
                price={this.state.totalPrice}
                count={this.state.ingredients}
                ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerB; 