import { createAction } from "@reduxjs/toolkit";

const current = createAction("CURRENT", (data) => {
    return {
        payload: {
            ... data,
            loggedIn: true,
            
        } 
    }
} );

const login = createAction("LOGIN", (token) => {
    localStorage.setItem("token", token)
    return {
        payload: {
            timestamps: Date.now()
        } 
    }
} );

const logout = createAction("LOGOUT", () => {
    localStorage.removeItem("token")
    return {
        payload: {
            loggedIn: false
        } 
        
    }
} );

const actions = {
    current,
    login,
    logout
}

export default actions 