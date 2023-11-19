import { configureStore } from '@reduxjs/toolkit';
import cartTotalReducer from '../features/cart/cartTotalSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    cartTotal: cartTotalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
