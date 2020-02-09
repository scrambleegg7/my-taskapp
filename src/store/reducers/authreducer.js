
const InitState = {
    authError : null,

}

const authReducer = (state = InitState, action ) => {
    switch(action.type) {
        
        case 'LOGIN_ERROR':
            console.log("login error from authreducer.")
            return {
                ...state,
                authError: 'LOGIN FAILED.'
            }
        
        case 'LOGIN_SUCCESS':
            console.log("login success from authreducer.")
            return {
                ...state,
                authError: null
            }
        
        default:
            return state;

    }
    
}

export default authReducer;