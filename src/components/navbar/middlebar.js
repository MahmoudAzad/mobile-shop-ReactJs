import React from 'react';
import ReactTooltip from 'react-tooltip';

const Middlebar = () => {
  return (
    <ul className="middle-bar-container container">


      <div className="dropdown"> 
      <li className="middle-bar-menu"><i className="fa fa-bars fa-2x fa-fw" aria-hidden="true"></i></li>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
      </div>
     
      <li className="middle-bar-input">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <input type="text" className="form-control p-2" aria-label="Text input with dropdown button" placeholder="i'm shopping for..." />
            <div className="input-group-append">
              <button className="btn btn-outline middle-bar-input-search " type="button">Serach</button>
            </div>
          </div>
      </li>

      <li className="middle-bar-icons">  
        <i className="fa fa-heart-o fa-2x fa-fw" aria-hidden="true"></i>
        <i className="fa fa-shopping-bag fa-2x fa-fw" aria-hidden="true"></i>
        <i className="fa fa-user-o fa-2x fa-fw" aria-hidden="true"></i>
      </li>

    </ul>
  )
}

export default Middlebar;