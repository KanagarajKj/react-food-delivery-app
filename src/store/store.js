import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../cartFeatures/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
