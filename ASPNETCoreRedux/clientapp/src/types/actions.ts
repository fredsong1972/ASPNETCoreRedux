import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export type AppActions =
    {
        type: 'GET_WEATHER',
        payload: {
            request: AxiosRequestConfig
        }
    } | {
        type: 'GET_WEATHER_SUCCESS',
        payload: AxiosResponse
    } | {
        type: 'GET_WEATHER_FAIL',
        error: AxiosError
    }; 

export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL';