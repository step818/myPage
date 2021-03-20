import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Bio from "./screens/Bio";
import Home from "./screens/Home/Home";
import NotFound from "./screens/404NotFound/404NotFound";
import Projects from "./screens/Projects";
import Toolbar from "./components/Toolbar/Toolbar";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Toolbar />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/bio" component={Bio} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
