import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePlayerGame from './components/SinglePlayerGame';
import HumanVsHumanGame from './components/HumanVsHumanGame';

const App = () => {
  return (
    <Router>
      <div className='p-4'>
        <h1 className='text-3xl font-bold mb-4'>Online Chess Game</h1>
        <Switch>
          <Route path="/single-player">
           <SinglePlayerGame></SinglePlayerGame>
          </Route>
          <Route path="/human-vs-human">
           <HumanVsHumanGame></HumanVsHumanGame>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;