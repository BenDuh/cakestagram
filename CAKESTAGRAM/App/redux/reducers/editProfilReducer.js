const INITIAL_STATE = {
    
}

export const EDIT_GET = 'EDIT_GET'
export const EDIT_GET_REQUEST = 'EDIT_GET_REQUEST'


export const getEdit= () =>{
    return { 
        type: EDIT_GET,
    }
}
export const getEditRequest = (e) =>{
    return { 
        type: EDIT_GET_REQUEST,
        payload: {
            ...e
        }   
    }
}


export const editReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case EDIT_GET_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case  EDIT_GET :
            return {
                ...state,
                fetching: false,
                payload: action.payload
            }
        default:
            return state
    }
    
}