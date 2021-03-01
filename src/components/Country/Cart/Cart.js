import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce( (sum, country)=> sum + country.population, 0);
    return (
        <div>
            <h3>This is cart: {cart.length}</h3>
            <p>total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;