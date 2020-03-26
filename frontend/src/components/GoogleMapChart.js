import React from 'react';
import Loading from "./loading";
import Chart from "react-google-charts";

class GooglePieChart extends React.Component {

    render() {

        return <Chart
            height={'500px'}
            chartType="GeoChart"
            loader={<Loading/>}
            data={this.props.data}
            options={{
                chartArea: {
                    width: '94%',
                },
                is3D: true,
            }}
            rootProps={{'data-testid': '2'}}
        />
    }
}

export default GooglePieChart