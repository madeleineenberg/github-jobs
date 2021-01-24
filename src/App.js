import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'
import "./fontello/css/fontello.css"
import StartPage from './pages/StartPage';
import JobDetailPage from './pages/JobDetailPage';

function App() {
  return (
    <div>
      <Switch>
        
        <Route path="/job/:id" component={JobDetailPage}/>
        <Route path="/" component={StartPage}/>

      </Switch>

    </div>
  );
}

export default App;
