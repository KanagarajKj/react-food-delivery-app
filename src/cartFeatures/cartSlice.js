import { createSlice } from '@reduxjs/toolkit';
import products from '../products';

const initialState = {
  productsList: products,
  totalQuantity: 0,
  orderQty: 0,
  totalAmount: 0,
  addCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    increase: (state, action) => {
      const cartItem = state.addCart.find((item) => item.id === action.payload);
      cartItem.quantity = cartItem.quantity + 1;
      state.totalQuantity++;

      state.totalAmount = state.addCart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),

        0
      );
    },
    decrease: (state, action) => {
      const cartItem = state.addCart.find((item) => item.id === action.payload);
      state.totalQuantity = state.totalQuantity - 1;
      if(cartItem.quantity === 0){
        state.orderQty = state.orderQty - 1;
      }else{
        cartItem.quantity--;
      }

      state.totalAmount = state.addCart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeOrders: (state, action) => {
      const existingItem = state.addCart.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity =
        Number(state.totalQuantity) - Number(existingItem.quantity);

      state.orderQty = state.orderQty - 1;

      state.addCart = state.addCart.filter(
        (item) => item.id !== action.payload
      );

      state.totalAmount = state.addCart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.productsList.find(
        (item) => item.id === newItem.id
      );

      if (state.addCart.find((item) => item.id) !== existingItem.id )
        {
          state.addCart.push({
            id: existingItem.id,
            title: existingItem.title,
            quantity: existingItem.quantity,
            image: existingItem.image,
            price: existingItem.price,
          });
          state.orderQty = state.orderQty + 1;
      } else {
         alert('already Added');
      }
    },
    buyMySelf:(state)=>{
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.orderQty = 0;
    },
  },
});

export const {
  increase,
  decrease,
  removeCart,
  calculateTotals,
  addItem,
  removeOrders,
  buyMySelf,
} = cartSlice.actions;

export default cartSlice.reducer;
