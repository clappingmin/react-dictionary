import { configureStore, createSlice } from '@reduxjs/toolkit';

const voca = createSlice({
  name: 'vocaReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ word: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((word) => word.id !== action.payload),
  },
});

const store = configureStore({ reducer: voca.reducer });

export const { add, update, remove } = voca.actions;

export default store;
