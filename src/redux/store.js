import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './reducers/userReducer';
export const server = 'https://javabc.vercel.app/api/v1';

const store = configureStore({
    reducer: {
        login:loginReducer

    }})

export default store;