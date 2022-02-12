import React, { Fragment } from 'react';
import Advertise from '../advertise/advertise';
import Carousel from '../carousel/carousel';
import Categories from '../categories/categories';
import Weekly from '../weekly/weekly';

const Home = () => {
    return ( 
        <Fragment> 
            <Carousel />
            <Advertise />
            <Weekly />
            <Categories />
        </Fragment>
     );
}
 
export default Home;