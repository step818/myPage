import React from "react";
import SocialFollow from "./SocialFollow/SocialFollow";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h3>be a pal</h3>
      <SocialFollow />
    </div>
  );
};

export default Footer;
