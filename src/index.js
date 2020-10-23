import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import OurWork from './components/OurWork';
import Supporter from './components/Supporter';
import Gallery from './components/Gallery';
import Contribute from './components/Contribute';
import Contact from './components/Contact';


import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    
<BrowserRouter>
<Header />
  <Switch>
  <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/OurWork" component={OurWork} />
        <Route path="/Supporter" component={Supporter} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Contribute" component={Contribute} />
        <Route path="/Contact" component={Contact} />
  </Switch>
<Footer />
</BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

 