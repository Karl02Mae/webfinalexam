import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import store from "./redux/store";
import Home from './pages/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


export default function App() {
  return (
    <div className='Router'>
      <Router>
        <Switch>

          <Route path='/' exact>
            <Header />
            <Home />
            <Footer />
          </Route>
          
        </Switch>
      </Router>
    </div>
  )
}
