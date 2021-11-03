import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import OnlineCourse from './components/pages/OnlineCourse';
import SignUp from './components/pages/SignUp';
import Nav from "./components/Navbar/Nav";
import About from "./components/pages/About/Aboutmore";
function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/onlinecourse' component={OnlineCourse} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
