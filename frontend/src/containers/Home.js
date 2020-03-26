import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getContinents} from "../actions/continent";
import Loading from "../components/loading";
import {Button, Card, Header, Message} from "semantic-ui-react";
import EntityCard from "../components/EntityCard";
import GooglePieChart from "../components/GooglePieChart";
import {Link} from "react-router-dom";


export class Home extends React.Component {
    onContinentClick = (continent) => {
        console.log(continent);
    };

    componentDidMount() {
        this.props.getContinents();
    }

    renderPopulationChart(continents) {
        let populationArr = [];
        populationArr.splice(0, 0, ['Country', 'Population'])
        continents.map((continent, index) => {
            populationArr.push([continent.continent, continent.total_population]);
        });

        return <Fragment>
            <Header size='medium'>Continents & Population breakdown</Header>
            <GooglePieChart data={populationArr}/>
        </Fragment>
    }


    render() {
        if (this.props.error) {
            return <Message color='red'> {this.props.error}</Message>
        }
        if (this.props.isLoading) {
            return <Loading/>
        }
        return (
            <Fragment>
                {this.renderPopulationChart(this.props.continents)}

                <Card.Group centered>
                    {this.props.continents.map((continent, index) => {
                        return <EntityCard key={index}
                                           name={continent.continent}
                                           data={continent}
                                           onClick={() => this.onContinentClick(continent.continent)}>
                            <Button as={Link} to={`/continent/${continent.continent}`} basic color='green'>
                    View Details
                </Button>
                        </EntityCard>
                    })}
                </Card.Group>

            </Fragment>
        )
    }
}

Home.propTypes = {
    continents: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
    continents: state.continents.continents,
    isLoading: state.continents.isLoading,
    error: state.continents.error
});
export default connect(mapStateToProps, {getContinents})(Home)