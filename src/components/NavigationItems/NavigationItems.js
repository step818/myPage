import React, { Component } from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/about">About</NavigationItem>
      <NavigationItem link="/projects">Projects</NavigationItem>
      <NavigationItem link="contact">Contact Me</NavigationItem>
    </ul>
  );
};

export default navigationItems;
