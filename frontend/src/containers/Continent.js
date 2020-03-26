import React, {Fragment} from 'react'
import {connect} from "react-redux";
import {getRegions} from "../actions/region";
import Loading from "../components/loading";
import {Card} from "semantic-ui-react";
import RegionCard from "../components/RegionCard";

class Continent extends React.Component {
    componentDidMount() {
        const {name} = this.props.match.params;
        this.props.getRegions(name);
    }

    render() {
        if(this.props.isLoading){
            return <Loading/>
        }
        return (
            <Fragment>
                <Card.Group centered>
                    {this.props.regions.map((region, index) => {
                        return <RegionCard key={index} region={region}/>
                    })}
                </Card.Group>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    regions: state.regions.regions,
    isLoading: state.regions.isLoading,
});


export default connect(mapStateToProps, {getRegions})(Continent)