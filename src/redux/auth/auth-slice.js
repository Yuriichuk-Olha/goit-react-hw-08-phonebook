import { createSlice } from '@reduxjs/toolkit'
import operations from './auth-operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshCurrent: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    exstraRedusers: {
        [operations.register.pending](state,action){},
        [operations.register.fulfilled](state,action){
            state.user= action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [operations.register.rejected](state,action){},
        [operations.logIn.pending](state,action){},
        [operations.logIn.fulfilled](state,action){
            state.user= action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [operations.logOut.fulfilled](state){
            state.user= { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [operations.fetchCurrentUser.pending](state){
            state.isLoggedIn = true;
            state.isRefreshCurrent = true;

        },
        [operations.fetchCurrentUser.fulfilled](state,action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshCurrent = false;
        },
        [operations.fetchCurrentUser.rejected](state){
            state.isLoggedIn = false;
            state.isRefreshCurrent = false;
        },

    }
})

// export default authSlice.reducer
export const authReducer = authSlice.reducer
