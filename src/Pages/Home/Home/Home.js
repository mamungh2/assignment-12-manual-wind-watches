import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;