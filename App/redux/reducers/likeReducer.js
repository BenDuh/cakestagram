
const INITIAL_STATE = {
    like: false
  }
  
  // ACTION TYPES
  export const POST_LIKE = 'POST_LIKE'
  export const POST_LIKE_REQUEST = 'POST_LIKE_REQUEST'

  // ACTIONS
  export const postLike = (like) => {
    return {
      type: POST_LIKE,
      payload: {
            like
      }
    }
  }

  export const postLikeRequest = (justelike) => {
    console.log("postlikrequesrt",justelike);
    return {
      type: POST_LIKE_REQUEST,
      payload: {
            justelike
      }
    }
  }
  
  export const likeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_LIKE:
            return {
                ...state,
                like: [action.payload.like]
            }
    
        default:
            return state
    }
}