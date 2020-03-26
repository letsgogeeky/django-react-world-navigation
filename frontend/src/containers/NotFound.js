import React, {Fragment} from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
const Notfound = () => (
    <Fragment>
        <h1>Oops! Where are you going?</h1>
        <Button as={Link} to={`/`}>Go Home!</Button>
    </Fragment>
);
export default Notfound