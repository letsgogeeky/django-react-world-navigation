import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CityForm from "../components/city/CityForm";
import {addCity} from "../actions/city";
import {Breadcrumb, Button, Divider, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";


class CreateCity extends React.Component {
      constructor() {
        super();
        this.state = {
            city: {
                countrycode: ''
            }
        }
    }

    componentDidMount() {
        this.setState({
            city: {
                ...this.state.city,
                countrycode: this.props.match.params.code
            }
        })
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
            <Header as='h2'>
                Create a new City
            </Header>
            <CityForm city={this.state.city} onFieldChange={this.onFieldChange} onFormSubmit={this.onFormSubmit}/>
            <Divider/>
            <Button as={Link} to={`/country/${this.state.city.countrycode}`} color={'red'}>
                Cancel
            </Button>
        </Fragment>
    }

}

CreateCity.propTypes = {
    addCity: PropTypes.func.isRequired
};



export default connect(null, {addCity})(CreateCity)