import { createSlice } from "@reduxjs/toolkit";

interface Test {
    value: IPuppy[]
}

const initialState: Test = {
    value: []
}

export const puppySlice = createSlice({
    name: "puppies",
    initialState,
    reducers: {
        getAllPuppies: (state, action) => {

            for (let i = 0; i < action.payload.length; i++) {
                state.value.push(action.payload[i])
            }
        }
    }
})

export const {getAllPuppies} = puppySlice.actions
export default puppySlice.reducer;
