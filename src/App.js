import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/js/Home";
import Team from "./pages/js/Team";
import Deal from "./pages/js/Deal";
import About from "./pages/js/About";

import Nav from "./components/js/Nav";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/Home" component={Home} />
        <Route path="/Team" component={Team} />
        <Route path="/Deal" component={Deal} />
        <Route path="/About" component={About} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;