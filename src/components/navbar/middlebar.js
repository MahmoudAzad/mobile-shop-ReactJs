import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const Middlebar = () => {
  return (
    <ul className="middle-bar-container container">


      <img className="middle-bar-logo" src="/images\logo\react-logo.jpg" />


      <div className="middle-bar-bars-dropdown">
        <li className="dropbtn"><i className="fa fa-bars fa-2x fa-fw" aria-hidden="true"></i></li>
        <div className="middle-bar-bars-dropdown-content">
          <a href="#">Smartphones</a>
          <a href="#">Tablets</a>
          <a href="#">Accessories</a>
          <a href="#">Smartwatches</a>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
        </div>
      </div>

      <li className="middle-bar-input">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="middle-bar-dropdown-btn  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <input type="text" className="midle-bar-input p-2 pl-3 " aria-label="Text input with dropdown button" placeholder="i'm shopping for..." />
          <div className="input-group-append">
            <button className=" middle-bar-input-search " type="button"><strong>Serach</strong> </button>
          </div>
        </div>
      </li>

      <li className="middle-bar-icons">
        <Link to="google">
          <span className="fa-stack fa-2x has-badge" data-count="0">
               <i className="fa fa-heart-o text-dark fa-fw" aria-hidden="true"></i>
          </span>
        </Link>


          <div className="middle-bar-shoppingIcon-dropdown">
        <Link to="goo">
          <span className="fa-stack fa-2x has-badge" data-count="0">
              <div className="dropbtn">
                <i className="fa fa-shopping-bag text-dark fa-fw" aria-hidden="true"></i>
              </div> 
             
          </span>
        </Link>
          <div className="middle-bar-shoppingIcon-dropdown-content">
                <p>
                  No products in the cart.
                </p>
              </div>
          </div>

          
        <Link to="goo">
          <span className="fa-stack has-badge mt-1" >
            <i className="fa fa-user-o text-dark  fa-2x fa-fw" aria-hidden="true"></i>
          </span>

        </Link>

      </li>
      <h6 className="font-weight-bold mt-3 ml-1">Log in <br /> Regiater</h6>






    </ul>
  )
}

export default Middlebar;