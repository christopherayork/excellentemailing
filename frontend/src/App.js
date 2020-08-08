import React from 'react';
import { Route } from "react-router-dom";

import Nav from './components/nav/Nav';
import Dashboard from './components/dashboard/Dashboard';
import Emails from './components/emails/Emails';
import Onboarding from './components/onboarding/Onboarding';
import SendEmails from './components/sendEmails/SendEmails';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/nav/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Route exact path="/" component={Dashboard} />
        <Route path="/emails" component={Emails} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route path="/sendemails" component={SendEmails} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
