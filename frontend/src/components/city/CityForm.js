import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

const CityForm = ({onFieldChange, onFormSubmit, city}) => {
    const {name, population, district} = city;
  return <Form onSubmit={onFormSubmit}>
    <Form.Group widths='equal'>
      <Form.Field
        control={Input}
        label='City name'
        placeholder='City name'
        name='name'
        required={true}
        value={name}
        onChange={onFieldChange}
      />
      <Form.Field
        control={Input}
        label='Population'
        placeholder='Population'
        name='population'
        type='number'
        value={population}
        required={true}
        onChange={onFieldChange}
      />

    </Form.Group>
    <Form.Field
      control={Input}
      label='District'
      placeholder='District'
      name='district'
      value={district}
      required={true}
      onChange={onFieldChange}
    />

    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      color='green'
    />
  </Form>
};

export default CityForm