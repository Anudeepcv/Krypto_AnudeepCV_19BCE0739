import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Routes} from 'react-router-dom';
import Login from './containers/Login';
import HomePage from './containers/HomePage';
import ProductDetailPage from './containers/ProductDetailPage';
import Cart from './containers/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<HomePage />} />
        <Route path='/productdetails' element={<ProductDetailPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
