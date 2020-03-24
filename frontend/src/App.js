import React from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Button } from 'semantic-ui-react';

import { Country } from './containers/Country';

import { Home } from './containers/Home';

function handleSubmit(evt) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(({ data }) => {
      document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}

function App() {
  return (
    <div className="App">
      <div>
        <label htmlFor='char-input'>How many characters does</label>
        <input id='char-input' type='text' />
        <button onClick={handleSubmit}>have? TELL ME!</button>
        <Router>


          <Button as={Link} to="/country">
            Country
        </Button>
           <Button as={Link} to="/city">
            City
        </Button>
          <Button as={Link} to="/regions">
            Regions
        </Button>

          <Switch>

            <Route path='/country'>
              <Country />
            </Route>
            <Route path='/'>
              <H    ome />
            </Route>
          </Switch>
        </Router>
      </div>

      <div>
        <h3 id='char-count'></h3>
      </div>
    </div>
  );
}

export default App;