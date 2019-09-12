import React from 'react';
import { connect } from "react-redux";
import { Weather } from "../types/Weather";
import { AppState } from "../store/configureStore";


interface IProp {
    weather: Weather
};

class WeatherPage extends React.Component<IProp> {

    render() {
        const weather = this.props.weather;
        return (
            <div className="weather__info">
                { 
                   weather.city && weather.country && <p className="weather__key">Location: 
                        <span className="weather__value"> {weather.city}, {weather.country} </span>
                   </p>
                }
               { 
                weather.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {weather.temperature}</span>
                </p>
                }
                { 
                        weather.humidity && <p className="weather__key">Humidity: 
                        <span className="weather__value"> {weather.humidity}</span>
                   </p>
                }
                { 
                    weather.description && <p className="weather__key">Conditions: 
                    <span className="weather__value"> {weather.description}</span>
                    </p>
                }
                { 
                    weather.error && <p className="weather__error">
                    {weather.error}
                    </p>
                }
            </div>
            );
    }
};


const mapStateToProps = (state: AppState) : IProp =>({
    weather : state.weather
});

export default connect (mapStateToProps) (WeatherPage)