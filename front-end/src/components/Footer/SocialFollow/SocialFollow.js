import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./SocialFollow.module.css";

const SocialFollow = (props) => {
  return (
    <div className={classes.SocialFollow}>
      <a href="https://github.com/step818" className={classes.icon}>
        <FontAwesomeIcon icon={faGithub} size="2x" color="lightblue" />
      </a>
      <a href="https://www.facebook.com" className={classes.icon}>
        <FontAwesomeIcon icon={faFacebook} size="2x" color="lightblue" />
      </a>
      <a
        href="https://www.instagram.com/lowearthor8it"
        className={classes.icon}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="lightblue" />
      </a>
      <a
        href="https://www.linkedin.com/in/phentrewick8"
        className={classes.icon}
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="lightblue" />
      </a>
    </div>
  );
};

SocialFollow.propTypes = {};

export default SocialFollow;
