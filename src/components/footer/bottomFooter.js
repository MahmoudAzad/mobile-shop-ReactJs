import React from 'react';
import { Fragment } from 'react';

const BottomFooter = () => {
    return ( 
        <Fragment> 
                 <hr className="container" />
                 <div className="bottom-footer-container container mt-5 mb-5"> 
                    <p> 
                    Copyright 2021 © , All Rights Reserved. / Powered by NETinfo Plc
                    </p>
                    <img src="images\footer\payment-logos.png" />
                 </div>
        </Fragment>
     );
}
 
export default BottomFooter;