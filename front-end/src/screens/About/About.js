import React, { Component } from "react";
import face from "../../components/Images/forest_wanderer.jpg";
import wormhole from "../../components/Images/wormhole-bgimg.jpg";
import { Jumbotron } from "react-bootstrap";
import classes from "./About.module.css";

class About extends Component {
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
                      <h1 style={{ marginBottom: "-15px" }}>About me</h1>
                    </div>
                  </Jumbotron>
                </div>
              </div>
              <div className={classes.ProfilePic}>
                      <img src={face} alt="My profile image" />
              </div>
              <div className={classes.Paragraph}>
                <h3>
                        Hello. I've made this site to show some of the things I've made out of my interests. 
                        I really got started with programming at the start of 2019. I've been coding just about everyday ever since.
                        My favorite aspects about it include: how creative it is, from designing webpages to building software architecture,
                        there's so much to learn and explore; how interactive it is, the most desired products nowadays are apps and software.
                        people are making their lives easier and having fun with the newest software programs/apps. I really want to leave the planet
                        in a better place than I found it to be, and it would feel fullfilling to be able to invent a new technology that solved
                        a world problem. I also love to cycle, rock climb, build things, cook, and watch documentaries.
                </h3>
              </div>
          </div>;
  }
}

export default About;
