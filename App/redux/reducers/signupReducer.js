const INITIAL_STATE = {
    
}

export const SIGNUP_GET = 'SIGNUP_GET'
export const SIGNUP_GET_REQUEST = 'SIGNUP_GET_REQUEST'
export const SIGNUP_GET_ERROR = 'SIGNUP_GET_ERROR'

export const getSignup= () =>{
    return { 
        type: SIGNUP_GET,
        
    }
}
export const getSignupRequest = (e) =>{
    return { 
        type: SIGNUP_GET_REQUEST,
        payload: {
            ...e
        }   
    }
}
export const getSignupError = () =>{
    return { 
        type: SIGNUP_GET_ERROR,
        error
    }
}

export const signupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_GET_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case SIGNUP_GET_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        case  SIGNUP_GET :
            return {
                ...state,
                fetching: false,
                payload: action.payload
            }
        default:
            return state
    }
    
}