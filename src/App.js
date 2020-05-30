import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/js/Home";
import Team from "./pages/js/Team";
import Deals from "./pages/js/Deals";
import About from "./pages/js/About";
import News from "./pages/js/News";

import Nav from "./components/js/Nav";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/Home" component={Home} />
        <Route path="/Team" component={Team} />
        <Route path="/Deals" component={Deals} />
        <Route path="/About" component={About} />
        <Route path="/News" component={News} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;