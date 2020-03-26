import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const CityCard = ({city, handleDelete}) => (
    <Card raised>
        <Card.Content>
            <Card.Header>{city.name}</Card.Header>

            <Card.Description>
                <strong>Population: </strong>~ {city.population}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button as={Link} to={`/city/edit/${city.id}`} basic color='green'>
            Edit
          </Button>
                <Button onClick={() => handleDelete(city.id)} basic color='red'>
            Delete
          </Button>
            </div>
        </Card.Content>
    </Card>
)

export default CityCard