const INITIAL_STATE = {
  messages: null
}

export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST'

export const getMessages = (messages) => {
  return {
    type: GET_MESSAGES,
    payload: {
      messages
    }
  }
}

export const getMessagesRequest = () => {
  return {
    type: GET_MESSAGES_REQUEST
  }
}

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