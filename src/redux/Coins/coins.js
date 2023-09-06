import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { COINS_URL } from '../../components/API';

export const fetchCoins = createAsyncThunk(
  'coins/fetchCoins',
  async () => {
    const req = await fetch(COINS_URL);
    const resp = await req.json();
    return resp.data;
  },
);

const initialState = {
  coins: [],
  pending: false,
  error: false,
};
const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, { payload }) => ({
      ...state,
      coins: payload,
      pending: false,
      error: false,
    }));

    builder.addCase(fetchCoins.pending, (state) => ({
      ...state,
      pending: true,
      error: false,
    }));

    builder.addCase(fetchCoins.rejected, (state) => ({
      ...state,
      pending: false,
      error: true,
    }));
  },
});

export default coinsSlice.reducer;
