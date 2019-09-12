import React from "react";
import { connect } from "react-redux";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getWeather } from "../actions/weather";

interface IState {
    city?: string;
    country?: string;
};

interface IFormProps {
    /* The http path that the form will be posted to */
    getWeather: (country: string, city: string) => void;
}


class Form extends React.Component<IFormProps, IState> {
    constructor(props: IFormProps) {
        super(props);
        this.state = {
            city: "",
            country: ""
        };
    }
    handleSubmit = async (e: any) => {
        e.preventDefault();
        if (this.state.city && this.state.country)
            this.props.getWeather(this.state.country, this.state.city);
    }

    handleChange(e: any) {
        // If you are using babel, you can use ES 6 dictionary syntax
        // let change = { [e.target.name] = e.target.value }
        let change: any = {};
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {
        var city = this.state.city;
        var country = this.state.country;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="city" value={city} onChange={this.handleChange.bind(this)} placeholder="City..." />
                <input type="text" name="country" value={country} onChange={this.handleChange.bind(this)} placeholder="Country..." />
                <button>Get Weather</button>
            </form>
        );
    }
};


//export default Form;
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): IFormProps => ({
    getWeather: bindActionCreators(getWeather, dispatch)
});

export default connect(null, mapDispatchToProps)(Form);
