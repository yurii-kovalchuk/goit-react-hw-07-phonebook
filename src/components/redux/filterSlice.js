import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeValue(_, action) {
      return action.payload;
    },
  },
});

export const { changeValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
