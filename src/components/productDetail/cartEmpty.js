import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <div className="container" >
            <h1 className="mt-5 font-weight-bold text-center">Cart</h1>


            <div className="cart-title ">
                <i class="fa fa-window-maximize  fa-lg mr-3 mt-1" aria-hidden="true" />

                <p className="text-left">Your cart is currently empty.</p>
            </div>
           <Link to="/"> <button className=" back-btn mt-4 "><i className="fa fa-long-arrow-left mr-3 " aria-hidden="true"/>Return to shop</button></Link>

        </div>
    );
}

export default CartEmpty;