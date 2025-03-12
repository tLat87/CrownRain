import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVibrationOn: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setVibration: (state, action) => {
      state.isVibrationOn = action.payload;
    },
  },
});

export const { setVibration } = settingsSlice.actions;
export default settingsSlice.reducer;
