import React, {useState} from "react";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [sent, setSent] = useState(false);

    const { firstName, lastName, email, message } = formData;

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_olwfqa7', 'template_nag1dt7', e.target, 'user_RluvTwFkipM9VAWrUWuyy')
            .then((result) => {
                resetForm();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    function resetForm() {
        setSent(!sent);
        setFormData({...formData, firstName: '', lastName: '', email: '', message: ''});
    }

    let form = (
        <form className="php-email-form" onSubmit={sendEmail}>
            <div className="form-row">
                <div className="col-md-6 form-group">
                <label>First name</label>
                <input
                    className="form-control"
                    name="firstName" 
                    type="text"
                    value={firstName}
                    onChange={handleChange}
                    required={true} />
                </div>
            </div>
            <div className="col-md-6 form-group">
                <label>Last name</label>
                <input
                className="form-control"
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                required />
            </div>
            <div className="col-md-6 form-group">
                <label>Email</label>
                <input
                className="form-control"
                name="email" 
                type="email"
                value={email}
                onChange={handleChange}
                required />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea 
                name="message"
                rows="4"
                cols="50"
                value={message}
                onChange={handleChange}
                required />
            </div>
            <div className="text-center">
                <button type="submit">Send Message</button>
            </div>
        </form>
    )

    if (sent) {
        form = (
            <div>
                <form onSubmit={resetForm}>
                    <div>
                        <p>Your message has been sent.</p>
                    </div>
                    <button type="submit">Thank you!</button>
                </form>
            </div>
        )
    }

    return (
        <div  className={classes.Paragraph} style={{ marginTop: "100px" }}>
                <div>
                  {form}
                </div>
              </div>
    );
}