import { Weather } from "./Weather"
export interface WeatherRequest {
    country: string,
    city: string,
    weather?: Weather
}