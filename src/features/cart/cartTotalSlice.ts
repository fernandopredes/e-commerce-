import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartTotalState {
  total: number;
  subtotal: number;
  discount: number;
  paymentMethod: string;
}

const initialState: CartTotalState = {
  total: 0,
  subtotal: 0,
  discount: 0,
  paymentMethod: '',
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
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    clearCart: () => initialState,
  },
});

export const { setCartTotal, setSubtotal, setDiscount, setPaymentMethod, clearCart } = cartTotalSlice.actions;

export default cartTotalSlice.reducer;
