import './App.css';
import React from 'react';
import { Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import DogDetails  from './components/DogDetails/DogDetails';
import CreateDog from './components/CreateDog/CreateDog';

function App() {
  return (

      <React.Fragment>  
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/dogs/:id' component={DogDetails}/>
        <Route exact path = '/create' component={CreateDog}/>
      </React.Fragment>

  );
}

export default App;
