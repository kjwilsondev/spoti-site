import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
