import React, { Component } from "react";

import Footer from "../../components/Footer/Footer";
import { Jumbotron } from "react-bootstrap";
import classes from "./Projects.module.css";
import wormhole from "../../components/Images/wormhole-bgimg.jpg";

class Projects extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "30px" }}>
        <div className={classes.Jumbotron}>
          <div
            className={classes.Background}
            style={{ backgroundImage: `url(${wormhole})` }}
          >
            <Jumbotron
              style={{
                color: "lightBlue",
                marginBottom: "30px",
              }}
            >
              <div>
                <h1 style={{ marginBottom: "-15px" }}>My Creations</h1>
              </div>
            </Jumbotron>
          </div>
        </div>
        <div className={classes.Paragraph} style={{ marginTop: "100px" }}>
          <div>
            <a
              className={classes.link}
              href="https://aqualogy-f1531.firebaseapp.com/"
            >
              Aqualogy
            </a>
          </div>
          <p>Description:</p>
          <p className={classes.Description}>
            A blog site for astrology fans that may also be seeking guidance and
            help from a professional astrologer.
          </p>
          <br></br>
          <div>
            <a
              className={classes.link}
              href="https://game-hub-mine-dia6tng77-stephen-trewicks-projects.vercel.app/"
            >
              Game Hub
            </a>
          </div>
          <p>Description:</p>
          <p className={classes.Description}>
            A mock site using RESTful routing to make get requests from a video
            game api at Rawg.io
          </p>
          <p>
            The site utilizes custom hooks to update the state and uses ChakraUI
            for styling. I make use of responsive rendering for small, medium,
            and large screen sizes.
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Projects;
