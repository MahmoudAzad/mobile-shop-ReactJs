import React from 'react';

const Topbar = () => {
  return (
    <div>

      <ul class="nav  justify-content-end top-bar-container">
        
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Cart</a>
        </li><li class="nav-item">
          <a class="nav-link disabled" href="#">Order</a>
        </li><li class="nav-item">
          <a class="nav-link disabled" href="#">Tracking</a>
        </li><li class="nav-item">
          <a class="nav-link disabled" href="#">Checkout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">My account</a>
        </li>
        
      </ul>

    </div>
  );
}

export default Topbar;