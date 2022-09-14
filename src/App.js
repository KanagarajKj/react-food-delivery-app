import React,{useEffect} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import Orders from './components/Orders';
import Deals from './components/Deals';
import Login from './components/Login';
import SingleProduct from './components/SingleProduct';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { calculateTotals } from './cartFeatures/cartSlice';


const App = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(calculateTotals());
    }, [cartItems]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products/:productID" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
