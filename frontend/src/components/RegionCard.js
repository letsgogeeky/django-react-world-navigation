import React from 'react'
import { Button, Card } from 'semantic-ui-react'

const RegionCard = ({region}) => (

    <Card>

      <Card.Content>
        {/*<Image*/}
        {/*  floated='right'*/}
        {/*  size='mini'*/}
        {/*  src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'*/}
        {/*/>*/}
        <Card.Header>{region.region}</Card.Header>
          <Card.Meta><strong>Avg. Age: </strong>{region.lifeexpectancy? region.lifeexpectancy: 'Nobody lives there!'}</Card.Meta>
        <Card.Description>
          <strong>Population: </strong>~ {region.population}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Countries
          </Button>
        </div>
      </Card.Content>
    </Card>
);

export default RegionCard