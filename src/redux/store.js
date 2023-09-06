import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './Coins/coins';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
