import { createReducer } from '@reduxjs/toolkit'
import authActions from '../actions/auth.actions'

const { login, current, logout } = authActions

const initialState = {
    user: {
        name: '',
        email: '',
        loggedIn: null
    },
    /* token: null, */
    timestamps: null
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            return {
                ...state,
                token: action.payload.token,
                timestamps: action.payload.timestamps,
                loggedIn: true 
            };
        })
        .addCase(current, (state, action) => {
            return {
                ...state,
                user: action.payload,
                loggedIn: true 
            };
        })
        .addCase(logout, (state, action) => {
            return {
                ...state,
                user: {
                    name: '',
                    email: '',
                    loggedIn: false
                },
                token: null
            }
        })
        

})

export default authReducer