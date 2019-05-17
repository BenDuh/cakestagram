const INITIAL_STATE = {
}

export const MY_ACCOUNT_GET = 'MY_ACCOUNT_GET'
export const MY_ACCOUNT_GET_REQUEST = 'MY_ACCOUNT_GET_REQUEST'

export const getMyAccount= (account) =>{
    return { 
        type: MY_ACCOUNT_GET,
        account  
    }
}
export const getMyAccountRequest = () =>{
    return { 
        type: MY_ACCOUNT_GET_REQUEST,
          
    }
}

export const myAccountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MY_ACCOUNT_GET_REQUEST :
            return {
                ...state,
                fetching: true
            }
        case  MY_ACCOUNT_GET :
            return {
                ...state,
                fetching: false,
                account: action.account
            }
        default:
            return state
    }
    
}