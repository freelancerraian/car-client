import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';
import Products from '../Products/Products'
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
      <div>
        <Navigation></Navigation>
        <Banner></Banner>
        <Products></Products>
        <ShowReview></ShowReview>
        <Footer></Footer>
      </div>
    );
};

export default Home;