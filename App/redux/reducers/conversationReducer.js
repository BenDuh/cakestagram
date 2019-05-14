const INITIAL_STATE = {
    conversations:["Vous n'avez pas de conversation"]
    }
    
    export const CONVERSATION_GET = 'CONVERSATION_GET'
    export const CONVERSATION_GET_REQUEST = 'CONVERSATION_GET_REQUEST'
    export const getConv = (user_id) =>{
      return { 
          type: CONVERSATION_GET,
          conversation
      }
    }
    export const getConvRequest = () =>{
        return { 
            type: CONVERSATION_GET_REQUEST
        }
      }
    
    export const conversationReducer = (state = INITIAL_STATE, action) => {
        console.log(state)
        switch (action.type) {
            case  CONVERSATION_GET :
                return {...state,conversation:action.conversation}
                
        
            default:
               return state
        }
        
    }