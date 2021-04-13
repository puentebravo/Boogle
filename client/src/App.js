import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search/search";
import Saved from "./pages/saved/saved";
import "./App.css";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/home" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
