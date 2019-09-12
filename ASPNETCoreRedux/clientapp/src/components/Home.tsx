import React from 'react';
import Titles from "./Titles";
import Form from "./Form";
import WeatherPage from "./Weather";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container col-xs-12 col-xl-12">
                            <div className="row">
                                <div className="col-xs-5 col-xl-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-5 col-xl-7 form-container">
                                    <Form />
                                    <WeatherPage />
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;