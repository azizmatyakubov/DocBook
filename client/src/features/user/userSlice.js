import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./userAction";


const initialState = {
    token : null,
    role: null,
    loading: false,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null
            state.token = null
            state.role = null
            state.loading = false
            state.error = null
            state.success = false
        }
        
    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.loading = false
            state.userInfo = action.payload.data
            state.succes = true
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [loginUser.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false
            state.role = action.payload.role
            state.token = action.payload.token
            state.success = true
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    },
})

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions