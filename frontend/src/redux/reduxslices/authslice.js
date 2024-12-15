import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    usertoken: null,
    admintoken: null
}

export const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        usertokenadd: (state, action) => {
            state.usertoken = action.payload.token
        },
        admintokenadd: (state, action) => {
            state.admintoken = action.payload.token
        },
        usertokenremove: (state) => {
            state.usertoken = null
        },
        admintokenremove: (state) => {
            state.admintoken = null
        },
    }
})

export default authslice.reducer
export const { usertokenadd, admintokenadd, usertokenremove, admintokenremove } = authslice.actions