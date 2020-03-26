import React from 'react'
import {Button, Card, Table} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const RegionCard = ({region}) => (

    <Card>

      <Card.Content>
        {/*<Image*/}
        {/*  floated='right'*/}
        {/*  size='mini'*/}
        {/*  src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'*/}
        {/*/>*/}
        <Card.Header>{region.region}</Card.Header>
          <Card.Meta><strong>Avg. Age: </strong>{region.avg_life? region.avg_life: 'Nobody lives there!'}</Card.Meta>
        <Card.Description>
          <strong>Population: </strong>~ {region.total_population}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
            <Button as={Link} to={`/region/${region.region}`} inverted color='green'>Countries</Button>
        </div>
      </Card.Content>
    </Card>
);

export default RegionCard