import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null
}

export const touridslice = createSlice({
    name: 'tourid',
    initialState,
    reducers: {
        addtourid: (state, action) => {
            state.id = action.payload;
        },
        removetourid: (state) => {
            state.id = null
        }
    }
})

export default touridslice.reducer;
export const { addtourid, removetourid } = touridslice.actions
