import React from 'react'
import { Card, Label} from 'semantic-ui-react'

const EntityCard = ({data, name, children}) => (
    <Card raised>
        <Card.Content>
            <Label as='a' color='black' ribbon='right'>
                <strong>GNP: </strong>$ {data.total_gnp}
            </Label>
            <Card.Header>{name}</Card.Header>
            <Card.Meta><strong>Avg. Age: </strong>{data.avg_life ? data.avg_life : 'Nobody lives there!'}
            </Card.Meta>
            <Card.Description>
                <strong>Population: </strong>~ {data.total_population}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                {children}
            </div>
        </Card.Content>
    </Card>
)

export default EntityCard