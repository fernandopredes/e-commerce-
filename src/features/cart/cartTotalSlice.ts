import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartTotalState {
  total: number;
}

const initialState: CartTotalState = {
  total: 0,
};

export const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState,
  reducers: {
    setCartTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { setCartTotal } = cartTotalSlice.actions;

export default cartTotalSlice.reducer;
