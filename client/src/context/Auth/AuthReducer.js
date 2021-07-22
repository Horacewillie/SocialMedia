import {AUTH_SUCCESS} from '../types'


export const AuthReducer = (state, action) => {
    console.log(state)
    switch(action.type){
        case AUTH_SUCCESS:
            console.log(action.payload)
        return{
            ...state,
            userDetail: action.payload
        }
        default:
            return state
    }
}