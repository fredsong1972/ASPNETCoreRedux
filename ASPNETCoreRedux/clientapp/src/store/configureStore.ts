import axios, {AxiosRequestConfig} from 'axios';
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "../types/actions";
import { createStore, combineReducers, applyMiddleware } from "redux";
import axiosMiddleware from 'redux-axios-middleware';
import { weatherReducer } from '../reducers/weather'

export const rootReducer = combineReducers({
    weather: weatherReducer
});

const config: AxiosRequestConfig = {
    responseType: 'json'
};
const defaultClient = axios.create(config);

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer,  applyMiddleware(axiosMiddleware(defaultClient), thunk as ThunkMiddleware<AppState, AppActions>));