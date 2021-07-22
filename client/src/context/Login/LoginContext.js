import { createContext, useReducer } from "react"
import LoginReducer from './LoginReducer'

const INITIAL_STATE = {
    loginSuccess: false,
    isFetching: false,
    error: false
}

export const LoginContext = createContext(INITIAL_STATE)

export const LoginContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(LoginReducer, INITIAL_STATE)

    return (
        <LoginContext.Provider
        value = {{
            ...state,
            dispatch
        }}
        >
            {children}
        </LoginContext.Provider>
    )
}