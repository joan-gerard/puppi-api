import { createSlice } from "@reduxjs/toolkit";


const initialState: {
    value: IPuppy[]
} = {
  value: [],
};

export const puppySlice = createSlice({
  name: "puppies",
  initialState,
  reducers: {
    getAllPuppies: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.value.push(action.payload[i]);
      }
    },
    deletePuppyReducer: (state, action) => {
      //   debugger;
      console.log("puppySlice deletePuppyReducer", { state, action });
      //   state.value = state.value.filter((puppy) => {
      //     return puppy._id !== action.payload._id;
      //   });
      state.value = action.payload;
    },
  },
});

export const { getAllPuppies, deletePuppyReducer } = puppySlice.actions;
export default puppySlice.reducer;
