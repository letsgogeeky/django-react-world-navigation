import React from 'react'
import { Button, Card } from 'semantic-ui-react'

const CountryCard = ({country, onClick}) => (

    <Card>

      <Card.Content>
        {/*<Image*/}
        {/*  floated='right'*/}
        {/*  size='mini'*/}
        {/*  src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'*/}
        {/*/>*/}
        <Card.Header>{country.name}</Card.Header>
          <Card.Meta><strong>Avg. Age: </strong>{country.lifeexpectancy? country.lifeexpectancy: 'Nobody lives there!'}</Card.Meta>
        <Card.Description>
          <strong>Population: </strong>~ {country.population}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={onClick} basic color='green'>
            Regions
          </Button>
          <Button basic color='grey'>
            Map
          </Button>
        </div>
      </Card.Content>
    </Card>
);

export default CountryCard