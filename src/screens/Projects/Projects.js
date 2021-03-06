import React, { Component } from "react";
import wormhole from "../../components/Images/wormhole-bgimg.jpg";
import { Jumbotron } from "react-bootstrap";
import classes from "./Projects.module.css";
import Footer from "../../components/Footer/Footer";

class Projects extends Component {
  render() {
    return <div style={{ paddingBottom: "30px" }}>
            <div className={classes.Jumbotron}>
                <div
                  className={classes.Background}
                  style={{ backgroundImage: `url(${wormhole})` }}
                >
                  <Jumbotron
                    style={{
                      color: "lightBlue",
                      marginBottom: "30px"
                    }}
                  >
                    <div>
                      <h1 style={{ marginBottom: "-15px" }}>My Creations</h1>
                    </div>
                  </Jumbotron>
                </div>
              </div>
              <div className={classes.Paragraph} style={{ marginTop: "100px" }}>
                <div><a className={classes.link} href="https://aqualogy-f1531.firebaseapp.com/">Aqualogy</a></div>
                <p>Description:</p>
                <p className={classes.Description}>A blog site for astrology fans that may also be seeking guidance and help from a professional astrologer.</p>
                <br></br>
                <div><a className={classes.link} href="https://hangmandangman.azurewebsites.net/">Hangman Dangman</a></div>
                <p>Description:</p>
                <p className={classes.Description}>The classic guessing game everyone loves to play. Play against the computer or with each other.</p>
              </div>
            <Footer />
          </div>;
  }
}

export default Projects;
