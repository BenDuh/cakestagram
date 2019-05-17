const INITIAL_STATE = {
  messages: null
}

// ACTION TYPES
export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST'

export const POST_MESSAGE_REQUEST = 'POST_MESSAGE_REQUEST'

// ACTIONS
export const getMessages = (messages) => {
  return {
    type: GET_MESSAGES,
    payload: {
      messages
    }
  }
}

export const getMessagesRequest = (user_id) => {
  return {
    type: GET_MESSAGES_REQUEST,
    payload: {
      user_id
    }
  }
}

export const postMessage = (user_id, text) => {
  return {
    type: POST_MESSAGE_REQUEST,
    payload: {
      user_id,
      text
    }
  }
}

// REDUCER
export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        messages: action.payload.messages
      }
    default:
      return state
  }
}