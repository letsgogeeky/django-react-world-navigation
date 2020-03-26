import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getContinents} from "../actions/continent";
import Loading from "../components/loading";
import {Card, Header, Message} from "semantic-ui-react";
import ContinentCard from "../components/ContinentCard";
import GooglePieChart from "../components/GooglePieChart";


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
            <Header size='medium'>Population breakdown</Header>
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

                 <Header size='medium'>Continents</Header>
                <Card.Group centered>
                    {this.props.continents.map((continent, index) => {
                        return <ContinentCard key={index}
                                              continent={continent}
                                              onClick={() => this.onContinentClick(continent.continent)}
                        />
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