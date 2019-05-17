const INITIAL_STATE = {
    user:[]
    }
    
    export const USER_GET = 'USER_GET'
    export const USER_GET_REQUEST = 'USER_GET_REQUEST'

    export const getUser = (user) =>{
      return { 
          type: USER_GET,
          user
      }
    }
    export const getUserRequest = () =>{
        return { 
            type: USER_GET_REQUEST, 
        }
      }
    
    export const userReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {
            case  USER_GET :
                return {...state, user:action.user}
        }
        return state
    }