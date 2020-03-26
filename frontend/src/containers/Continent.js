import React, {Fragment} from 'react'
import {connect} from "react-redux";
import {fetchRegions} from "../actions/region";
import Loading from "../components/loading";
import {Button, Card, Checkbox, Form, Header, Table} from "semantic-ui-react";
import RegionCard from "../components/RegionCard";
import {Link} from "react-router-dom";
import GooglePieChart from "../components/GooglePieChart";

class Continent extends React.Component {
    constructor() {
        super();
        this.state = {
            isTable: false
        }
    }

    componentDidMount() {
        const {name} = this.props.match.params;
        this.props.fetchRegions(name);
    }

    toggleView = (event, {value}) => {
        this.setState({isTable: value === 'table'})
    };

    renderPopulationChart(regions) {
        let populationArr = [];
        populationArr.splice(0, 0, ['Country', 'Population'])
        regions.map((region, index) => {
            populationArr.push([region.region, region.total_population]);
        });

        return <Fragment>
            <Header size='medium'>Population breakdown</Header>
            <GooglePieChart data={populationArr}/>
        </Fragment>
    }

    renderCardView = (regions) => {
        return (
            <Card.Group centered>
                {regions.map((region, index) => {
                    return <RegionCard key={index} region={region}/>
                })}
            </Card.Group>
        )
    };
    renderTableView = (regions) => {
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
                        regions.map((region, index) => {
                            return <Table.Row key={index}>
                                <Table.Cell>{region.region}</Table.Cell>
                                <Table.Cell>{region.lifeexpectancy}</Table.Cell>
                                <Table.Cell>{region.population}</Table.Cell>
                                <Table.Cell>
                                    <Button as={Link} to={`/region/${region.region}`} inverted color='green'>Countries</Button>
                                </Table.Cell>
                            </Table.Row>
                        })
                    }

                </Table.Body>
            </Table>
        )
    };

    render() {
        if (this.props.isLoading) {
            return <Loading/>
        }
        return (
            <Fragment>
                {this.renderPopulationChart(this.props.regions)}

                 <Header size='medium'>Regions of {this.props.match.params.name}</Header>
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


                {this.state.isTable? this.renderTableView(this.props.regions): this.renderCardView(this.props.regions)}
                </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    regions: state.regions.regions,
    isLoading: state.regions.isLoading,
});


export default connect(mapStateToProps, {fetchRegions})(Continent)