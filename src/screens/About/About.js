import React, { Component } from "react";

import Footer from "../../components/Footer/Footer";
import { Jumbotron } from "react-bootstrap";
import classes from "./About.module.css";
import face from "../../components/Images/forest_wanderer.jpg";
import wormhole from "../../components/Images/wormhole-bgimg.jpg";

class About extends Component {
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
              <div className={classes.ProfilePic}>
                <h1 style={{ marginBottom: "-15px" }}>About me</h1>
              </div>
            </Jumbotron>
          </div>
        </div>
        <div className={classes.ProfilePic}>
          <img src={face} alt="My profile" />
        </div>
        <div className={classes.Paragraph}>
          <h3>
            <p>
              Welcome to my portfolio website, where I showcase the culmination
              of my creative journey driven by a profound passion for
              programming. Embarking on my coding odyssey in early 2019, I have
              fervently dedicated myself to the craft, coding diligently every
              day since.
            </p>{" "}
            <p>
              My enthusiasm for programming lies in its inherent creativity,
              ranging from the meticulous design of webpages to the intricacies
              of constructing robust software architectures. The ever-evolving
              nature of the field fuels my eagerness to continuously learn and
              explore, as I find profound satisfaction in the dynamic challenges
              that programming presents.
            </p>{" "}
            <p>
              One of the aspects that captivates me the most is the
              interactivity inherent in modern software development. Today, the
              most sought-after products are innovative apps and software
              solutions that enhance lives and provide entertainment. I am
              driven by the prospect of contributing to this technological
              landscape, aiming not only to make lives more efficient but also
              to leave a positive impact on our planet.
            </p>{" "}
            <p>
              Beyond coding, I am an avid enthusiast of various activities,
              including cycling, rock climbing, DIY projects, culinary arts, and
              documentary exploration. These diverse interests complement my
              technical acumen, providing a well-rounded perspective and
              contributing to my holistic approach to problem-solving.
            </p>{" "}
            <p>
              In essence, my goal extends beyond coding; I aspire to invent
              technologies that address global challenges, leaving a lasting
              legacy of positive change. Join me on this journey as we explore
              the intersection of creativity, innovation, and the boundless
              possibilities of the digital landscape.
            </p>
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
