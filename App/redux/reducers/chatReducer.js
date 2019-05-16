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

export const getMessagesRequest = (conversationId) => {
  return {
    type: GET_MESSAGES_REQUEST,
    payload: {
      conversationId
    }
  }
}

export const postMessage = (conversationId, text) => {
  return {
    type: POST_MESSAGE_REQUEST,
    payload: {
      conversationId,
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