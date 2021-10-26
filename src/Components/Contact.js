import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

import schema from "../schema/schema";
import * as yup from "yup";

const initialFormValues = {
  contactName: "",
  contactEmail: "",
  contactSubject: "",
  contactMessage: "",
};

const Contact = (props) => {
  var name = props.data.name;
  var city = props.data.address.city;
  var state = props.data.address.state;
  var phone = props.data.phone;
  var message = props.data.contactmessage;

  const [formValues, setFormValues] = useState(initialFormValues);

  const [errors, setErrors] = useState({
    contactName: "Name is required",
    contactEmail: "Email is required",
    contactSubject: "Subject is required",
    contactMessage: "Message is required",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tit21f9",
        "template_to3qq5b",
        e.target,
        "user_Mjm9Zv6iu3lV7LWKsxHV4"
      )
      .then(
        (result) => {
          console.log("submitted");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    swal({
      title: "Message Sent!",
      text: "I look forward to speaking with you!",
      icon: "success",
      button: "Done!",
    });
    setFormValues(initialFormValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
        setButtonDisabled(false);
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={sendEmail} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name{" "}
                  <span className="required">{errors.contactName && "*"}</span>
                </label>

                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={handleChange}
                  style={{ width: "65%" }}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <br />{" "}
                  <span className="required">
                    {errors.contactEmail && `${errors.contactEmail}*`}
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChange}
                  style={{ width: "65%" }}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">
                  Subject{" "}
                  <span className="required">
                    {errors.contactSubject && "*"}
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={handleChange}
                  style={{ width: "65%" }}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <br />{" "}
                  <span className="required">
                    {errors.contactMessage && `${errors.contactMessage}*`}
                  </span>
                </label>
                <textarea
                  cols="50"
                  rows="10"
                  id="contactMessage"
                  name="contactMessage"
                  onChange={handleChange}
                  style={{ resize: "none", width: "65%", height: "auto" }}
                ></textarea>
              </div>

              <div>
                <button
                  className="submit"
                  disabled={buttonDisabled}
                  onSubmit={sendEmail}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {city}, {state} <br />
              <span>{phone}</span> <br />
              <a href="mailto:humza718@gmail.com">humza718@gmail.com</a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
