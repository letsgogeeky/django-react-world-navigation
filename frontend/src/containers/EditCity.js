import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CityForm from "../components/city/CityForm";
import {getCity, updateCity} from "../actions/city";
import Loading from "../components/loading";
import {Button, Divider, Flag, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";


class EditCity extends React.Component {
    constructor() {
        super();
        this.state = {
            city: {
                countrycode: ''
            }
        }
    }

    componentDidMount() {
        this.props.getCity(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            city: nextProps.city
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
        this.props.updateCity(this.state.city);
    };

    render() {
        if (!this.state.city) {
            return <Loading/>
        }
        return <Fragment>
            <Header as='h2'>
                Update {this.state.city.name}
            </Header>
            <CityForm city={this.state.city} onFieldChange={this.onFieldChange} onFormSubmit={this.onFormSubmit}/>
            <Divider/>
            <Button as={Link} to={`/country/${this.state.city.countrycode}`} color={'red'}>
                Cancel
            </Button>
        </Fragment>
    }

}

EditCity.propTypes = {
    updateCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    city: state.cities.currentCity
});

export default connect(mapStateToProps, {updateCity, getCity})(EditCity)