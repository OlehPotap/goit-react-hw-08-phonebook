import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./authFormOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLogedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, {payload}){
            console.log(state)
            state.user = payload.user;
            state.token = payload.token;
            state.isLogedIn = true;
        },
        [login.fulfilled](state, {payload}){
            state.user = payload.user;
            state.token = payload.token;
            state.isLogedIn = true;
        },
        [logout.fulfilled](state, {payload}){
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLogedIn = false;
        }
    },
})

export default authSlice.reducer