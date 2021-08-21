import React, { Component } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import { Jumbotron } from "react-bootstrap";
import classes from "./Home.module.css";
import face from "../../components/Images/arms_crossed_1.jpg";
import wormhole from "../../components/Images/wormhole-bgimg.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className={classes.Jumbotron}>
          <div
            className={classes.Background}
            style={{ backgroundImage: `url(${wormhole})` }}
          >
            <Jumbotron
              style={{
                color: "lightBlue",
              }}
            >
              <div className={classes.ProfilePic}>
                <h1 style={{ marginBottom: "-15px" }}>Stephen Trewick</h1>
                <h2 style={{ marginBottom: "10px" }}>
                  Student . Creative . Engineer
                </h2>
                <img src={face} alt="My profile" />
              </div>
            </Jumbotron>
          </div>
        </div>
        <div className={classes.Home}>
          <p>Website coming sooooooooooooooooon...</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
