import './App.css';
import React from 'react'
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutUs from './Pages/AboutUs';
import Navbar from './components/menu/Navbar';


function App() {



  return (
    <Router basename={window.location.pathname || ''}> 
      <div className="pages">
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutUs} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
