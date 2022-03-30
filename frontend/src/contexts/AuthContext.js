import { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { authReducer, SET_AUTH } from '../reducers/AuthReducer'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import setAuthToken from '../utils/SetAuthToken'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    
    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider