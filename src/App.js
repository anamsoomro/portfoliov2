import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Summary from './components/Summary';
import Background from './components/Background'
import Projects from './components/Projects'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Nav />
        <Switch>
          <Route exact path="/" render={ () => <Summary /> } />
          <Route exact path="/background" render={ () => <Background /> } />
          <Route exact path="/projects" render={ () => <Projects /> } />
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
