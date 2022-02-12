import React, { Fragment } from 'react';
import Topbar from './topbar';
import Middlebar from './middlebar' ;
import Bottombar from './bottombar' ;


const Navbar = () => {
    return ( 
        <Fragment>
            <Topbar />
            <Middlebar />
            <Bottombar />
        </Fragment>
     );
}
 
export default Navbar;