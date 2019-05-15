const INITIAL_STATE = {
    
}

export const SIGNUP_GET = 'SIGNUP_GET'
export const SIGNUP_GET_REQUEST = 'SIGNUP_GET_REQUEST'

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

export const signupReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case SIGNUP_GET_REQUEST:
            return {
                ...state,
                fetching: true
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