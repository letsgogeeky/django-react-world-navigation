import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const Loading = () => (
  <Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>We're processing your request</Message.Header>
      We are fetching that content for you.
    </Message.Content>
  </Message>
);

export default Loading