const INITIAL_STATE = {
    comments: []
}

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'

export const getComments = (comments) => {
    return {
        type: GET_COMMENTS,
        payload: {
            comments
        }
    }
}

export const getCommentsRequest = (myId) => {
    return {
        type: GET_COMMENTS_REQUEST,
        payload: {
            myId
        }
    }
}

export const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: [...(action.payload.comments)]
            }
        default:
            return state
    }
}
