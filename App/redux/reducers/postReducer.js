const INITIAL_STATE = {
    
}

export const POST_GET = 'POST_GET'
export const POST_GET_REQUEST = 'POST_GET_REQUEST'


export const getPost= () =>{
    return { 
        type: POST_GET,
        
    }
}
export const getPostRequest = (e) =>{
    return { 
        type: POST_GET_REQUEST,
        payload: {
            ...e
        }   
    }
}
export const postReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case POST_GET_REQUEST:
            return {
                ...state,
                fetching: true
            }

        case  POST_GET :
            return {
                ...state,
                fetching: false,
                payload: action.payload
            }
        default:
            return state
    }
    
}