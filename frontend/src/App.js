import React from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Container, Header} from 'semantic-ui-react';

import {Country} from './containers/Country';

import Home from './containers/Home';
import Notfound from "./containers/NotFound";
import Continent from "./containers/Continent";
import Region from "./containers/Region";

function handleSubmit(evt) {
    const text = document.querySelector('#char-input').value

    axios
        .get(`/char_count?text=${text}`).then(({data}) => {
        document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
        .catch(err => console.log(err))
}

function App() {
    return (
        <Container>
            <Header as='h1'>World Navigator</Header>
            <p>The data seems to be greatly outdated so don't use the presented data as reliable source of truth.</p>
            <p>
                This project is presented as a task to <strong>Adeva.co</strong> & <strong>Prometheus</strong>
            </p>
            <Router>

                <Switch>
                    <Route path='/continent/:name' component={Continent}/>
                    <Route path='/region/:name' component={Region}/>
                    <Route path='/country/:code' component={Country}/>
                    <Route exact path='/' component={Home}/>
                    <Route component={Notfound} />
                </Switch>
            </Router>
        </Container>


    );
}

export default App;