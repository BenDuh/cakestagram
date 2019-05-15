

const INITIAL_STATE = {
boss:'benoit'
}

export const APPLICATION_ACTION = 'APPLICATION_ACTION'
export const APPLICATION_ACTION_REQUEST = 'APPLICATION_ACTION_REQUEST'
export const testApp = (boss) =>{
  return { 
      type: APPLICATION_ACTION,
      boss
  }
}
export const testAppRequest = () =>{
    return { 
        type: APPLICATION_ACTION_REQUEST
    }
  }

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case APPLICATION_ACTION:
            return {...state,boss:action.boss}
            
    
        default:
           return state
    }
    
}
