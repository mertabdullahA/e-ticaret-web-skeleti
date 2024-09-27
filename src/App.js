import './App.css';
import DropdownMenu from './components/DropdownMenu';
import Header from './components/Header';
import Nav from './components/Nav';
import Ana from './components/Ana';
import Slider from './components/Slider';

import React, { useState } from 'react';
import Ana2 from './components/Ana2';
import Products from './components/Products';
import ProductList from './components/ProductList';
import Kutular from './components/Kutular';
import Blog from './components/Blog';


function App() {
  const [price, setPrice] = useState(1);

  return (
    <>
      <Header price={price} />

      <Nav />
      <DropdownMenu />
      <Slider />
      <Ana />
      <Ana2 />
      <ProductList></ProductList>
      <Kutular></Kutular>
      <Blog></Blog>

    </>
  );
}

export default App;
