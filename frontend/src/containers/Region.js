import React, {Fragment} from 'react'
import {connect} from "react-redux";
import Loading from "../components/loading";
import {Breadcrumb, Button, Card, Checkbox, Form, Header, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {getCountriesInRegion} from "../actions/country";
import {getRegion} from "../actions/region";
import GoogleMapChart from "../components/GoogleMapChart";
import EntityCard from "../components/EntityCard";
import CountryCard from "../components/CountryCard";

class Region extends React.Component {
    constructor() {
        super();
        this.state = {
            isTable: false
        }
    }

    componentDidMount() {
        const {name} = this.props.match.params;
        this.props.getRegion(name);
        this.props.getCountriesInRegion(name);
    }

    toggleView = (event, {value}) => {
        this.setState({isTable: value === 'table'})
    };

    renderCardView = (countries) => {
        console.log(countries);
        return (
            <Card.Group centered>
                {countries.map((country, index) => {
                    return <CountryCard key={index} country={country}>
                    </CountryCard>
                })}
            </Card.Group>
        )
    };
    renderTableView = (countries) => {
        return (

            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Avg. Life Expectancy</Table.HeaderCell>
                        <Table.HeaderCell>Population</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        countries.map((country, index) => {
                            return <Table.Row key={index}>
                                <Table.Cell>{country.name}</Table.Cell>
                                <Table.Cell>{country.lifeexpectancy}</Table.Cell>
                                <Table.Cell>{country.population}</Table.Cell>
                                <Table.Cell>
                                    <Button as={Link} to={`/country/${country.code}`} inverted color='green'>
                                        View Details
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        })
                    }

                </Table.Body>
            </Table>
        )
    };
    renderCountriesMap(countries) {
        let populationArr = [];
        populationArr.splice(0, 0, ['Country', 'Population'])
        countries.map((country, index) => {
            populationArr.push([country.name, country.population]);
        });

        return <Fragment>
            <Header size='medium'>Region Counties & Population</Header>
            <GoogleMapChart data={populationArr}/>
        </Fragment>
    }

    render() {
        if (this.props.isLoading || !this.props.region) {
            return <Loading/>
        }
        return (
            <Fragment>
                <Breadcrumb>
                    <Breadcrumb.Section href={'/'}>Continents</Breadcrumb.Section>
                    <Breadcrumb.Divider/>
                    <Breadcrumb.Section href={`/continent/${this.props.region.continent}`}>
                        {this.props.region.continent}
                    </Breadcrumb.Section>
                    <Breadcrumb.Divider/>
                    <Breadcrumb.Section active>{this.props.region.region}</Breadcrumb.Section>
                </Breadcrumb>
                {this.renderCountriesMap(this.props.countries)}
                <Form>
                    <Form.Group>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='Table View'
                                name='checkboxRadioGroup'
                                value='table'
                                checked={this.state.isTable}
                                onChange={this.toggleView}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='Card View'
                                name='checkboxRadioGroup'
                                value='card'
                                checked={!this.state.isTable}
                                onChange={this.toggleView}
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
                {this.state.isTable ? this.renderTableView(this.props.countries) : this.renderCardView(this.props.countries)}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    countries: state.countries.countries,
    isLoading: state.countries.isLoading,
    region: state.regions.currentRegion
});


export default connect(mapStateToProps, {getCountriesInRegion, getRegion})(Region)