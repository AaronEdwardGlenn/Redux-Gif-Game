import React from 'react';
import MoodsFn from '../containers/MoodsFn';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GamePage from '../components/game/gamePage';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={GamePage} />
          <Route path='/gifgame' component={MoodsFn} />
        </Switch>
      </Router>
    </>
  ); 
}
