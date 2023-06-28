import { createSlice } from '@reduxjs/toolkit'



export const usersSlice = createSlice({
  name: 'billing',
  initialState:{},
  reducers: {
      addBilling: (state, action) => {
          state.user = action.payload
      }
  }
})

export const { addBilling } = usersSlice.actions

export default usersSlice.reducer