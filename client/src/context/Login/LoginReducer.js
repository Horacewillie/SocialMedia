import {LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS} from '../types'

const LoginReducer = (state, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
               loginSucess: false,
               error: false,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                loginSuccess: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                loginSuccess:false,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state

    }
}

export default LoginReducer