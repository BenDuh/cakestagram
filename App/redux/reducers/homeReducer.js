const INITIAL_STATE = {
    post: null
}

export const GET_POST = 'GET_POST'
export const GET_POST_REQUEST = 'GET_POST_REQUEST'

export const getPost = (post) => {
    return {
        type: GET_POST,
        payload: {
            post
        }
    }
}

export const getPostRequest = () => {
    return {
        type: GET_POST_REQUEST,
    }
}

export const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                post: action.payload.post
            }
    
        default:
            return state
    }
}