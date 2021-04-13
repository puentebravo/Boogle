import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Index} />
        </Switch>
    </Router>
  );
}

export default App;
