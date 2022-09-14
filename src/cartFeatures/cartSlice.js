import { createSlice } from '@reduxjs/toolkit';
import products from '../products';

const initialState = {
  productsList: products,
  totalQuantity: 0,
  totalAmount: 0,
  addCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    increase: (state, action) => {
      const cartItem = state.productsList.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity = cartItem.quantity + 1;
      // state.totalQuantity++;

      state.totalAmount = state.productsList.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),

        0
      );
    },
    decrease: (state, action) => {
      const cartItem = state.productsList.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity--;

      // state.totalQuantity--;

      state.totalAmount = state.productsList.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),

        0
      );
    },
    removeCart: (state, action) => {
      state.cartItems = state.productsList.filter((item) => {
        return item.id !== action.payload;
      });
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.productsList.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.totalQuantity = quantity;
      state.totalAmount = total.toFixed(2);
    },

    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.productsList.find(
        (item) => item.id === newItem.id
      );

      state.addCart.push({
        id: existingItem.id,
        title: existingItem.title,
        quantity: existingItem.quantity,
        image: existingItem.image,
        price: existingItem.price,
      });

      state.totalQuantity++;


      // if (!existingItem) {
      //   state.productsList.push({
      //     id: newItem.id,
      //     title: newItem.title,
      //     image: newItem.image,
      //     // price: newItem.price,
      //     quantity: 1,
      //     // totalAmount: newItem.price,
      //   });
      // } else {
      //   existingItem.quantity++;
      //   // existingItem.totalPrice =
      //   //   Number(existingItem.totalAmount) + Number(newItem.price);
      // }

      // state.totalAmount = state.cartItems.reduce(
      //   (total, item) => total + Number(item.price) * Number(item.quantity),

      //   0
      // );

      // setItemFunc(
      //   state.cartItems.map((item) => item),
      //   state.totalAmount,
      //   state.totalQuantity
      // );
    },
  },
});

export const { increase, decrease, removeCart, calculateTotals, addItem } =
  cartSlice.actions;

export default cartSlice.reducer;
