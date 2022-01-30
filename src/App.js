import React from 'react';
import Advertise from './components/advertise/advertise';
import Carousel from './components/carousel/carousel';
import Bottombar from './components/navbar/bottombar';
import Middlebar from './components/navbar/middlebar';
import Topbar from './components/navbar/topbar';

const App = () => {
    return ( 
        <div>
            <Topbar />
            <Middlebar />
            <Bottombar />
            <Carousel/>
            <Advertise />
        </div>
     );
}
 
export default App;