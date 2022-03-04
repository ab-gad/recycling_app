import {
    USER_LOADED_FAIL,
    USER_LOADED_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    FACEBOOK_AUTH_SUCCESS,
    FACEBOOK_AUTH_FAIL
} from "../actions/actionTypes";

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    err: null,
    loginErr:null,
    resetPassErr:null,
    signUp: null,
};

export default function authReducer (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case FACEBOOK_AUTH_SUCCESS:
        case GOOGLE_AUTH_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh,
                err:null,
                resetPassErr:null,
                loginErr:null,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                err:null,
                signUp:'success'
            }
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case GOOGLE_AUTH_FAIL:
        case FACEBOOK_AUTH_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
                err:payload || null,
                loginErr:payload || null
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case PASSWORD_RESET_FAIL:
            return {
                ...state,
                resetPassErr:payload || null
            }
        case PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                resetPassErr: null
            }
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}

