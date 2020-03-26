import React, {Fragment} from "react";
import {connect} from "react-redux";
import CityForm from "./CityForm";
import {addCity} from "../../actions/city";
import PropTypes from 'prop-types';

class CreateCity extends React.Component {
      constructor() {
        super();
        this.state = {
            city: {
                countrycode: 'EGY'
            }
        }
    }

    componentDidMount() {

    }

    onFieldChange = (event) => {
        this.setState({
            city: {
                ...this.state.city,
                [event.target.name]: event.target.value
            }
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addCity(this.state.city);
    };

    render() {
        return <Fragment>
            <CityForm onFieldChange={this.onFieldChange} onFormSubmit={this.onFormSubmit}/>
        </Fragment>
    }

}

CreateCity.propTypes = {
    addCity: PropTypes.func.isRequired
};

export default connect(null, {addCity})(CreateCity)