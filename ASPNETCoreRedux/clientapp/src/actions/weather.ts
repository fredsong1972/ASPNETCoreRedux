import { AppActions } from "../types/actions";
import { Constants } from "../Constants";

export const getWeather = (country: string, city: string): AppActions => ({
    type: "GET_WEATHER",
    payload: {
        request: {
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Constants.API_Key}&units=metric`
        }
    }
});

