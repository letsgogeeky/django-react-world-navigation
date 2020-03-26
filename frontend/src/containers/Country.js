import React, {Fragment} from 'react'
import {connect} from "react-redux";
import {deleteCity, fetchCities} from "../actions/city";
import {getCountry} from "../actions/country";
import {Breadcrumb, Button, Card, Divider, Flag, Header, Icon, Label, Segment, Statistic} from "semantic-ui-react";
import Loading from "../components/loading";
import CityCard from "../components/city/CityCard";
import {Link} from "react-router-dom";

class Country extends React.Component {

    state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleDelete = (id) => this.props.deleteCity(id);
    componentDidMount() {
        this.props.getCountry(this.props.match.params.code);
        this.props.fetchCities(this.props.match.params.code);
    }

    renderCities = (cities) => {
        if (!cities) {
            return <Loading/>
        }
        return Object.values(cities).map((city, index) => {
            return <CityCard
                city={city} key={index}
                handleDelete={this.handleDelete.bind(this)}
            />
        })
    };

    renderStatistics = (country) => {
        if (!country) {
            return <Loading/>
        }
        return <Segment inverted>
            <Statistic.Group inverted widths='three'>
                <Statistic color='orange' inverted>
                    <Statistic.Value>{country.population / 1000000}</Statistic.Value>
                    <Statistic.Label>Population (Million)</Statistic.Label>
                </Statistic>
                <Statistic color='green' inverted>
                    <Statistic.Value>$ {country.gnp}</Statistic.Value>
                    <Statistic.Label>GNP</Statistic.Label>
                </Statistic>
                <Statistic color='teal' inverted>
                    <Statistic.Value>{country.surfacearea}</Statistic.Value>
                    <Statistic.Label>Area (KM)</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </Segment>
    };

    renderCountryBaseData = (country) => {
        if (!country) {
            return <Loading/>
        }
        return <Fragment>
            <Breadcrumb>
                <Breadcrumb.Section href={'/'}>Continents</Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section href={`/continent/${country.continent}`}>
                    {country.continent}
                </Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section href={`/region/${country.region}`}>{country.region}</Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>{country.name}</Breadcrumb.Section>
            </Breadcrumb>
            <Header as='h2'>
                <Flag name={country.code2.toLowerCase()}/> {country.name}
            </Header>

            <Button basic color='green' as={Link} to={`/city/create/${country.code}`} content='Add City'/>
            <Divider/>
            <Label>
                Gov. Form
                <Label.Detail>{country.governmentform}</Label.Detail>
            </Label>
            {/*<Label>*/}
            {/*    Capital*/}
            {/*    <Label.Detail>{this.props.cities[country.capital].name}</Label.Detail>*/}
            {/*</Label>*/}
            <Label>
                Local name
                <Label.Detail>{country.localname}</Label.Detail>
            </Label>

            <Segment inverted>
                <Statistic.Group widths='three'>
                    <Statistic inverted>
                        <Statistic.Value text>{country.continent}</Statistic.Value>
                        <Statistic.Label>Continent</Statistic.Label>
                    </Statistic>

                    <Statistic inverted>
                        <Statistic.Value text>
                            {country.region}
                        </Statistic.Value>
                        <Statistic.Label>region</Statistic.Label>
                    </Statistic>

                    <Statistic inverted>
                        <Statistic.Value>
                            <Icon name='plane'/>{country.indepyear}
                        </Statistic.Value>
                        <Statistic.Label>Independence Year</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Segment>
        </Fragment>
    };


    render() {

        return (
            <Fragment>

                {this.renderCountryBaseData(this.props.country)}
                {this.renderStatistics(this.props.country)}

                <Card.Group centered>
                    {this.renderCities(this.props.cities)}
                </Card.Group>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    country: state.countries.currentCountry,
    cities: state.cities.cities
});


export default connect(mapStateToProps, {fetchCities, getCountry, deleteCity})(Country)