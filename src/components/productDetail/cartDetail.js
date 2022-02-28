import React, { Fragment } from 'react';

const CartDetail = () => {
    return ( 
        <Fragment>
            <div className="cart-detail-container container">
                  <h1 className="mt-5 font-weight-bold text-center">Cart</h1>

                <div className="cart-title">
                  <i className="fa fa-check-circle fa-lg mr-3 mt-1" aria-hidden="true"></i>
                  <p className="text-left">Customer matched zone "Locations not covered by your other zones"</p>
                </div>

                <div className="cart-content ">     
                    <p className='w-50'>PRODUCT</p>
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p >TOTAL</p>
                </div>

                <div className='cart-detail'>
                    <div className='w-50'>
                        <img className='mt-3' width='100px' src='/images\Weekly\xiaomi_poco_f3_plata_01_l_silver.jpeg' />
                        <p>Xiaomi 11 Lite 5G NE Dual Sim 8GB RAM 256GB Blue</p>
                    </div>
                    <p>€359.00</p>
                    <p>3</p>
                    <div>
                    <p className='mr-5'>€359.00	</p>
                    <i className="fa fa-times" aria-hidden="true"></i>

                    </div>

                </div>

                <hr/>

                <div className='cart-btns'>
                    <button className=" back-btn"><i className="fa fa-long-arrow-left mr-3" aria-hidden="true"/>Back To Shop</button>
                    <button className=" clear-btn">Cleat Cart</button>
                </div>


                <div className="cart-list"> 

                    <div className="cart-list-coupon">
                        <h5  >Coupon Discount (If applicable)<i className="fa fa-angle-down fa-lg ml-3" aria-hidden="true"/></h5>
                        <input type="text" placeholder="Coupen code" className="mt-4 mr-3 float-left p-3 " /><br/>
                        <button className="mt-4 float-left">Apply coupon</button>
                    </div>  

                    <div className="cart-list-shipping">
                        <h5 >Calculate shipping <i className="fa fa-angle-down fa-lg ml-3" aria-hidden="true"/> </h5>



                        <div class="dropdown mt-4">
                            <button class=" dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Select a country / region ...
                            </button>
                            <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Iran</a>
                                <a class="dropdown-item" href="#">China</a>
                                <a class="dropdown-item" href="#">Japan</a>
                            </div>
                            </div>  



                        <input type="text" placeholder="State / County"  className="mt-2 p-2 "></input><br/>
                        <input type="text" placeholder="Town / City" className="mt-2  p-2 "></input><br/>
                        <input type="text" placeholder="Postcode / Zip" className="mt-2  p-2 "></input><br/>
                        <button className="mt-4 float-left">Update</button>
                    </div>

                    <div className="cart-list-calculate">
                        <div className="cart-list-calculate-border">

                        <div className="mt-4" >
                            <p>Subtotal</p>
                            <p >€1,208.00</p>
                        </div>
                        <hr />

                        <p>Shipping <br/>Enter your address to view shipping options.</p> <hr/>
                        
                        <div className="mb-4">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="text-danger">€1,208.00</h5>
                        </div>

                     </div>

                        <button className="cart-list-calculate-btn mt-3 w-100 ml-2">Proceed to checkout</button>
                    </div>

                </div>


            </div>


        </Fragment>
     );
}
 
export default CartDetail;