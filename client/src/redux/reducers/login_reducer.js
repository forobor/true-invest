import { DASHBOARD_LOGIN_API } from '../../constants';

const ADMIN_AUTH_LOADING = 'ADMIN_AUTH_LOADING'
const ADMIN_AUTH_SUCCESS = 'ADMIN_AUTH_SUCCESS'
const ADMIN_AUTH_FAIL = 'ADMIN_AUTH_FAIL'

const ADMIN_LOG_OUT = 'ADMIN_LOG_OUT'


const adminAuthLoading = bool => ({
    type: ADMIN_AUTH_LOADING,
    isLoading: bool
})

const adminAuthSuccess = bool => ({
    type: ADMIN_AUTH_SUCCESS,
    isLogged: bool
})

const adminAuthFail = error => ({
    type: ADMIN_AUTH_FAIL,
    error
})

const intialState = {
    isLoading: false,
    isLogged: undefined,
    error: null,
}

export default (state = intialState, action) => {
    switch(action.type) {
        case ADMIN_AUTH_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case ADMIN_AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogged: action.isLogged
            }
        case ADMIN_AUTH_FAIL:
            return {
                ...state,
                isLoading: action.false,                
                error: action.error
            }
        default:
            return state
    }
}

export const fetchAdminAuth = (authData) => dispatch => {
    dispatch(adminAuthLoading(true))
    fetch(`${DASHBOARD_LOGIN_API}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
        body: JSON.stringify(authData)
    })
    .then(response => {
        if (response.status !== 200) throw Error(response.message);
        dispatch(adminAuthLoading(false))
        return response
    })
    
    .then(response => response.json())
    .then(authResult => dispatch(adminAuthSuccess(authResult)))
    .catch(error => dispatch(adminAuthFail(error)));
}