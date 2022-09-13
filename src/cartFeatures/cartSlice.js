import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quantity:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
})

export default cartSlice.reducer;