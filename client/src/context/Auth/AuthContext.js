import {createContext, useReducer } from 'react';
import {AuthReducer} from './AuthReducer';


const INITIAL_STATE = {
    userDetail: null

}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider
        value = {{
            ...state,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}