import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Markdown from './pages/markdown/Markdown';
import Codepen from './pages/codepen/Codepen';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/markdown" component={Markdown} />
        <Route exact path="/codepen" component={Codepen} />
      </Switch>
    </Router>
  );
}

export default App;