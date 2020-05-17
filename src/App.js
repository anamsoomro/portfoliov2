import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Summary from './components/Summary';
import Background from './components/Background'
import Projects from './components/Projects'
import MoneyMoon from './components/MoneyMoon'
import AtomicJob from './components/AtomicJob'
import PictureShuffle from './components/PictureShuffle'
import CaptionIt from './components/CaptionIt'
import TypeWars from './components/TypeWars'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Nav />
        {/* Maybe move all these into one component, soo nav doesnt keep re-rendering */}
        <Switch>
          <Route exact path="/" render={ () => <Summary /> } />
          <Route exact path="/background" render={ () => <Background /> } />

          <Route exact path="/projects" render={ () => <Projects /> } />
          {/* <Route exact path="/projects/moneymoon" render={ () => <MoneyMoon /> } /> */}
          {/* <Route exact path="/projects/atomic-job" render={ () => <AtomicJob /> } /> */}
          {/* <Route exact path="/projects/pictureshuffle" render={ () => <PictureShuffle /> } /> */}
          {/* <Route exact path="/projects/captionit" render={ () => <CaptionIt /> } /> */}
          {/* <Route exact path="/projects/typewars" render={ () => <TypeWars /> } /> */}
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
