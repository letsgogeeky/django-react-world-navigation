import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

const CityForm = ({onFieldChange, onFormSubmit}) => (
  <Form onSubmit={onFormSubmit}>
    <Form.Group widths='equal'>
      <Form.Field
        control={Input}
        label='City name'
        placeholder='City name'
        name='name'
        required={true}
        onChange={onFieldChange}
      />
      <Form.Field
        control={Input}
        label='Population'
        placeholder='Population'
        name='population'
        type='number'
        required={true}
        onChange={onFieldChange}
      />

    </Form.Group>
    <Form.Field
      control={Input}
      label='District'
      placeholder='District'
      name='district'
      required={true}
      onChange={onFieldChange}
    />

    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
    />
  </Form>
);

export default CityForm