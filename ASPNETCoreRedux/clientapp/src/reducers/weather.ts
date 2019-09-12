import { Weather } from "../types/Weather";
import { AppActions } from "../types/actions";
import * as Actions from "../types/actions";

const weatherReducerDefaultState: Weather = {};

const weatherReducer = (state = weatherReducerDefaultState, action: AppActions): Weather => {
    switch (action.type) {
        case Actions.GET_WEATHER_SUCCESS:
            const data = action.payload.data;
            const weather = {
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            } as Weather;
            return weather;
        case Actions.GET_WEATHER_FAIL:
            return {
                error: action.error.message
            } as Weather;
        default:
            return state;
    }
};

export { weatherReducer };