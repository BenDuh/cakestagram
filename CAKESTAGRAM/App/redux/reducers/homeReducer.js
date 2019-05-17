const INITIAL_STATE = {
    posts: []
}

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'

/* export const POST_LIKE = 'POST_LIKE' */

export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        payload: {
            posts
        }
    }
}

export const getPostRequest = () => {
    return {
        type: GET_POSTS_REQUEST,
    }
}
/* 
export const postLike = (like) => {
    return {
        type: POST_LIKE,
        payload: {
            like
        }
    }
} */

export const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...(action.payload.posts || [])]
            }
    
        default:
            return state
    }
}