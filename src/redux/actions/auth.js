// @ts-nocheck
import API from "@/api";
import axios from "axios";

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const { data } = await axios.post(
            API.login,
            { email, password },
            {
                headers: {
                    'Content-type': 'application/json',
                },
                withCredentials: true,
            }
        );
        dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'loginFail', payload: error.response.data.message });
    }
};

export const loadUser = () => async dispatch => {
    try {
      dispatch({ type: 'loadUserRequest' });
  
      const { data } = await axios.get(API.user, {
        withCredentials: true,
      });
      dispatch({ type: 'loadUserSuccess', payload: data.user });
    } catch (error) {
      dispatch({ type: 'loadUserFail', payload: error.response.data.message });
    }
  };
  
  
  
  export const logOut = () => async dispatch => {
    try {
      dispatch({ type: 'logOutRequest' });
  
      const { data } = await axios.get(API.logout, {
        withCredentials: true,
      });
      dispatch({ type: 'logOutSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'logOutFail', payload: error.response.data.message });
    }
  };
