import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartTotalState {
  total: number;
  subtotal: number;
  discount: number;
}

const initialState: CartTotalState = {
  total: 0,
  subtotal: 0,
  discount: 0,
};

export const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState,
  reducers: {
    setCartTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setSubtotal: (state, action: PayloadAction<number>) => {
      state.subtotal = action.payload;
    },
    setDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
  },
});

export const { setCartTotal, setSubtotal, setDiscount } = cartTotalSlice.actions;

export default cartTotalSlice.reducer;
