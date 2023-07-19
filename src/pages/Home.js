import React from 'react'
import Slideshow from '../components/Slideshow'
import Read from '../firebase/fetchProducts';
import Title from '../components/ProductsTitle'


const Home = () => {
  return (
    <div>
      <Slideshow/>
      <Title/>
      <Read/>
    </div>
  );
};

export default Home;