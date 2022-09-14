import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cartFeatures/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
