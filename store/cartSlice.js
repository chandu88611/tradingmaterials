
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name:'cart',
  initialState: {img1:"",left:'',top:''},
  reducers: {
    addImage: (state, action) => {
        state.img1 = action.payload.img1,
        state.left =action.payload.left,
        state.top=action.payload.top
      },
  },
});

export const { addImage } = cartSlice.actions;
export default cartSlice.reducer;
