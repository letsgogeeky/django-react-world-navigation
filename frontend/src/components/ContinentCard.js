import React from 'react'
import {Button, Card, Divider, Label} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const ContinentCard = ({continent}) => (
    <Card raised>
        <Card.Content>
            <Label as='a' color='black' ribbon='right'>
                <strong>GNP: </strong>$ {continent.total_gnp}
            </Label>
            <Card.Header>{continent.continent}</Card.Header>
            <Card.Meta><strong>Avg. Age: </strong>{continent.avg_life ? continent.avg_life : 'Nobody lives there!'}
            </Card.Meta>
            <Card.Description>
                <strong>Population: </strong>~ {continent.total_population}
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