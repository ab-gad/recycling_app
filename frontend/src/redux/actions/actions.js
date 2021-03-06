import axios from 'axios';
import { toast } from "react-toastify";

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
    FACEBOOK_AUTH_FAIL,
    USER_SELL_ORDERS
}
from "./actionTypes";

axios.defaults.withCredentials = true;

export const signup = (first_name, last_name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ first_name, last_name, email, password, re_password });
    try {
        const res = await axios.post(`http://127.0.0.1:8000/auth/users/`, body, config);
        console.log('RES', res)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
        toast.info(`Sign up success check your mail for activation`, {
            position: "bottom-left",
          });
    } catch (err) {
        toast.error(`Sign up fail, Try again`, {
            position: "bottom-left",
          });
        if (err.response){
            console.log("signUp Err Res" ,err.response)
            dispatch({
                type: SIGNUP_FAIL,
                payload: err.response.data
            })
        } else {
            dispatch({
                type: SIGNUP_FAIL,
                payload: err
            })
            console.log("signUp Err" ,err)
        } 
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`http://127.0.0.1:8000/auth/jwt/create/`, body, config);
        toast.success(`Login Success`, {
            position: "bottom-left",
          });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        toast.error(`Login fail, Try again`, {
            position: "bottom-left",
          });
        if (err.response){
            console.log("Login Err Res" ,err.response)
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data
            })
        } else {
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            })
        }
    }
};

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 

        try {
            const res = await axios.get(`http://127.0.0.1:8000/auth/users/me/`, config);
    
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`http://127.0.0.1:8000/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        await axios.post(`http://127.0.0.1:8000/auth/users/reset_password/`, body, config);
        toast.info(`Reset password Email sent to check your Mail`, {
            position: "bottom-left",
          });
        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        toast.error(`Reset password fail, Try again`, {
            position: "bottom-left",
          });
        if (err.response){
            console.log("resetPassErr" ,err.response)
            dispatch({
                type: PASSWORD_RESET_FAIL,
                payload: err.response.data
            })
        }else{
            dispatch({
                type: PASSWORD_RESET_FAIL,
                payload:err
            });
        }
    }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        await axios.post(`http://127.0.0.1:8000/auth/users/reset_password_confirm/`, body, config);
        toast.success(`Password Reset Successfull`, {
            position: "bottom-left",
          });
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        toast.error(`Error resetting yor pasword, Try again`, {
            position: "bottom-left",
          });
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`http://127.0.0.1:8000/auth/users/activation/`, body, config);

        toast.success(`Account is Successfully verified`, {
            position: "bottom-left",
          });
          
        dispatch({  
            type: ACTIVATION_SUCCESS,
        });
    } catch (err) {
        toast.error(`verification fails, try again`, {
            position: "bottom-left",
          });
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};

export const googleAuthenticate = (state, code) => async dispatch => {
    if (state && code) {
        console.log("GOoGLE AURH START")
        const config = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': state,
            'code': code
        };
        console.log("GOoGLE AURH DETAILS" ,details)
        //put our state and code in a url friendly format
        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        console.log('URL ', formBody)
        try {
            const res = await axios.post(`http://127.0.0.1:8000/auth/o/google-oauth2/?${formBody}`, config);

            dispatch({
                type: GOOGLE_AUTH_SUCCESS,
                payload: res.data
            });

            dispatch(load_user());
        } catch (err) {
            console.log('ERR GOOGLE', err)
            dispatch({
                type: GOOGLE_AUTH_FAIL
            });
        }
    }
};

export const facebookAuthenticate = (state, code) => async dispatch => {
    if (state && code && !localStorage.getItem('access')) {
        const config = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': state,
            'code': code
        };

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        try {
            const res = await axios.post(`http://127.0.0.1:8000/auth/o/facebook/?${formBody}`, config);

            dispatch({
                type: FACEBOOK_AUTH_SUCCESS,
                payload: res.data
            });

            dispatch(load_user());
        } catch (err) {
            dispatch({
                type: FACEBOOK_AUTH_FAIL
            });
        }
    }
};

//______________________ORDERS_________________________//

export const setUserSellOrders = (payload)=>{
    return{
        type : USER_SELL_ORDERS,
        payload
    }
}