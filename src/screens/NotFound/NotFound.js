import React, { Component } from "react";
import face from "../../components/Images/forest_wanderer.jpg";
import wormhole from "../../components/Images/wormhole-bgimg.jpg";
import { Jumbotron } from "react-bootstrap";
import classes from "./NotFound.module.css";
import Footer from "../../components/Footer/Footer";

class NotFound extends Component {
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
                    <div className={classes.ProfilePic}>
                      <h1 style={{ marginBottom: "-15px" }}>404 Not Found</h1>
                    </div>
                  </Jumbotron>
                </div>
              </div>
              <div className={classes.Paragraph}>
                <h3 style={{ color:"lightBlue"}}>
                        The page you are looking for is not here.
                </h3>
              </div>
          </div>;
  }
}

export default NotFound;
