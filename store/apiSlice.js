import { createSlice } from '@reduxjs/toolkit'



export const apiSlce = createSlice({
  name: 'billing',
  initialState:"",
  reducers: {
      changeApiState: (state, action) => {
          state.user = action.payload
      }
  }
})

export const { changeApiState } = apiSlce.actions

export default apiSlce.reducer