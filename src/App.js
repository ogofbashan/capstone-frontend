import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainView from './views/main_view';




function App() {
  return(
    <div className="App">
      <Switch>
        <div className="container">
          <Route exact path='/' render={() => <MainView />} />
        </div>
      </Switch>

    </div>
  );
}

export default App;
