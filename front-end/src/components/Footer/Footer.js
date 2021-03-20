import React from "react";
import SocialFollow from "./SocialFollow/SocialFollow";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h2>Follow me</h2>
      <SocialFollow />
    </div>
  );
};

export default Footer;
