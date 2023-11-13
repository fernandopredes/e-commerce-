import { configureStore } from '@reduxjs/toolkit';
import cartTotalReducer from '../features/cart/cartTotalSlice';


export const store = configureStore({
  reducer: {
    cartTotal: cartTotalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
