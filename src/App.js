import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Baller from './views/Baller';
import Header from './components/header';





function App() {
  return(
    <div className="App">
      <Header />
      <Switch>
        <div className="container">
          <Route exact path='/' render={() => <Baller />} />

        </div>
      </Switch>
    </div>
  );
}

export default App;
