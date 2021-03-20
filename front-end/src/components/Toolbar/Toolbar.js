import React, { Component } from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <NavigationItems />
    </header>
  );
};

export default toolbar;
