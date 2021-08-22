import React, { Component } from "react";
import ContactForm from "./ContactForm";
import wormhole from "../../components/Images/wormhole-bgimg.jpg";
import { Jumbotron } from "react-bootstrap";
import classes from "./Contact.module.css";
import Footer from "../../components/Footer/Footer";

class Contact extends Component {
  
  render() {
    return (<div style={{ paddingBottom: "30px" }}>
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
                      <h1 style={{ marginBottom: "-15px" }}>Contact me</h1>
                    </div>
                  </Jumbotron>
                </div>
              </div>
              <ContactForm/>
              <Footer />
          </div>
    );
  }
}

export default Contact;
