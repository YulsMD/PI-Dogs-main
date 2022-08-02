import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import DogDetails  from './components/DogDetails/DogDetails';
import CreateDog from './components/CreateDog/CreateDog';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (

      <React.Fragment>  
        <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/dogs/:id' component={DogDetails}/>
        <Route exact path = '/create' component={CreateDog}/>
        <Route component={NotFound}/>
        </Switch>
      </React.Fragment>

  );
}

export default App;
