import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import New from './views/New';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab);

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={New} />
      </Router>      
      <Footer />
    </React.Fragment>
  );
}

export default App;
