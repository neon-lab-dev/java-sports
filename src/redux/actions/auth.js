// @ts-nocheck
import axios from "axios";
import { server } from '../store';

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const { data } = await axios.post(
            `${ server }/login`,
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
  
      const { data } = await axios.get(`${server}/me`, {
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
  
      const { data } = await axios.get(`${server}/logout`, {
        withCredentials: true,
      });
      dispatch({ type: 'logOutSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'logOutFail', payload: error.response.data.message });
    }
  };
