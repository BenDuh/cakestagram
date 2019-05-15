const INITIAL_STATE = {
    fetching: false
}


export const SESSION_GET = 'SESSION_GET'
export const SESSION_GET_REQUEST = 'SESSION_GET_REQUEST'

export const getSession= (sessionObject) =>{
    return { 
        type: SESSION_GET,
        payload: {
            ...sessionObject
        }
    }
}
export const getSessionRequest = (e) =>{
    return { 
        type: SESSION_GET_REQUEST,
        payload: {
            ...e
        }   
    }
}

export const sessionReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case SESSION_GET_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case  SESSION_GET :
            return {
                ...state,
                fetching: false,
                payload: action.payload
            }
        default:
            return state
    }
    
}