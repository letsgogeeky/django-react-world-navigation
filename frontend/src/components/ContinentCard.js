import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const ContinentCard = ({continent}) => (
    <Card>
      <Card.Content>
        <Card.Header>{continent.continent}</Card.Header>
          <Card.Meta><strong>Avg. Age: </strong>{continent.lifeexpectancy? continent.lifeexpectancy: 'Nobody lives there!'}</Card.Meta>
        <Card.Description>
          <strong>Population: </strong>~ {continent.population}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button as={Link} to={`/continent/${continent.continent}`} basic color='green'>
            Regions
          </Button>
          <Button basic color='grey'>
            Map
          </Button>
        </div>
      </Card.Content>
    </Card>
)

export default ContinentCard