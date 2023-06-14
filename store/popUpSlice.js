import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'popup',
  initialState:false,
  reducers: {
    setPopUp: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPopUp } = loaderSlice.actions;
export default loaderSlice.reducer;
