import React from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

import {Router, Route, Switch} from 'react-router-dom';

import {Container, Header} from 'semantic-ui-react';

import Country from './containers/Country';

import Home from './containers/Home';
import Notfound from "./containers/NotFound";
import Continent from "./containers/Continent";
import Region from "./containers/Region";
import CreateCity from "./containers/CreateCity";

import history from "./history";
import EditCity from "./containers/EditCity";

function App() {
    return (
        <Container>
            <Header as='h1'>World Navigator</Header>
            <p>The data seems to be greatly outdated so don't use the presented data as reliable source of truth.</p>
            <p>
                This project is presented as a task to <strong>Adeva.co</strong> & <strong>Prometheus</strong>
            </p>
            <Router history={history}>

                <Switch>
                    <Route path='/continent/:name' component={Continent}/>
                    <Route path='/region/:name' component={Region}/>
                    <Route path='/country/:code' component={Country}/>
                    <Route path='/city/create/:code' component={CreateCity}/>
                    <Route path='/city/edit/:id' component={EditCity}/>
                    <Route exact path='/' component={Home}/>
                    <Route component={Notfound} />
                </Switch>
            </Router>
        </Container>


    );
}

export default App;