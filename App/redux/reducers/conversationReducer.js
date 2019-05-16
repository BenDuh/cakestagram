const INITIAL_STATE = {
    conversation:[]
    }
    
    export const CONVERSATION_GET = 'CONVERSATION_GET'
    export const CONVERSATION_GET_REQUEST = 'CONVERSATION_GET_REQUEST'

    export const getConv = (conversation) =>{
      return { 
          type: CONVERSATION_GET,
          conversation
      }
    }
export const getConvRequest = () =>{
        return { 
            type: CONVERSATION_GET_REQUEST, 
        }
      } 
    
    export const conversationReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case  CONVERSATION_GET :
                return {...state, conversation:action.conversation}          
        }
        return state
    }