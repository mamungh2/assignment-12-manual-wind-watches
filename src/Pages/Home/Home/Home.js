import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Gift from '../Gift/Gift';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Gift></Gift>
            <UserReview></UserReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;