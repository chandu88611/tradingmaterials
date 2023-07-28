import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { img1: "", delete: false },
  reducers: {
    addImage: (state, action) => {
      (state.img1 = action.payload.img1),
        (state.delete = action.payload.delete);
    },
  },
});

export const { addImage } = cartSlice.actions;
export default cartSlice.reducer;
