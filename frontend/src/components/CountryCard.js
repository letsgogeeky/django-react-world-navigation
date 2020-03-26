import React from 'react'
import {Button, Card, Flag, Label} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const CountryCard = ({country}) => (

    <Card>

      <Card.Content>
           <Label as='a' color='black' ribbon='right'>
                <strong>GNP: </strong>$ {country.gnp}
            </Label>
        <Card.Header><Flag name={country.code2.toLowerCase()} /> {country.name}</Card.Header>
          <Card.Meta><strong>Avg. Age: </strong>{country.lifeexpectancy? country.lifeexpectancy: 'Nobody lives there!'}</Card.Meta>
        <Card.Description>
          <strong>Population: </strong>~ {country.population}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button as={Link} to={`/country/${country.code}`} basic color='green'>
            View Details
          </Button>
        </div>
      </Card.Content>
    </Card>
);

export default CountryCard