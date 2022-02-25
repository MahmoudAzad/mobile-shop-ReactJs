import React from 'react';
import { Fragment } from 'react';

const BottomFooter = () => {
    return ( 
        <Fragment> 
                 <hr className="container mt-5" />
                 <div className="bottom-footer-container container mt-3 mb-3"> 
                    <p> 
                    Copyright 2021 © , All Rights Reserved. / Powered by NETinfo Plc
                    </p>
                    <img src="/images/footer/payment-logos.png" />
                 </div>
        </Fragment>
     );
}
 
export default BottomFooter;