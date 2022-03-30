import { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { authReducer, SET_AUTH } from '../reducers/AuthReducer'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import setAuthToken from '../utils/SetAuthToken'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const loginUser = async userForm => {
        try {
            const res = await axios.post(`${apiUrl}/user/login`, userForm)

            if (res.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    res.data.accessToken
                )
            }
            console.log(res.data);

            return res.data

        } catch (error) {
            console.log({error});
            return error.response.data
        }
    }

    return (
        <AuthContext.Provider value={{ loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider