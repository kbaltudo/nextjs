import React, { useState } from "react";
import Alert from "../../Elements/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
  faTriangleExclamation,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./ContactUs.module.scss";
import Section from "../../PageStructure/Container/Section";
import Container from "../../PageStructure/Container/Container";

const ContactForm = ({ content }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse("");
    setLoader(true);
    if ("" == fname || "" == lname || "" == email || "" == msg) {
      setError(true);
      setResponse("Fill all required fields.");
      setLoader(false);
      return false;
    }

    const formData = {
      data: {
        FirstName: fname,
        LastName: lname,
        PhoneNumber: phone,
        Email: email,
        Message: msg,
      },
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact/create`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const resData = await response.json();
      if (undefined !== resData.data.error) {
        setSuccess(false);
        setError(true);
        setResponse(resData.data.error.message);
      } else if (resData?.error) {
        setError(true);
        setResponse(resData.error);
      } else {
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSuccess(true);
        setResponse(
          "Your request it sent to our team. Team will get back to you."
        );
      }
    } catch (error) {
      setSuccess(false);
      setError(true);
      setResponse(error.message);
    }
    setLoader(false);
    return true;
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "msg") {
      setMessage(e.target.value);
    } else if (e.target.name == "fname") {
      setFname(e.target.value);
    } else if (e.target.name == "lname") {
      setLname(e.target.value);
    }
  };
  return (
    <>
      <Section className={Styles.contactus + " bg-light-grey component"}>
        <Container>
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              {error ? (
                <Alert
                  message={response}
                  type="danger"
                  icon={faTriangleExclamation}
                />
              ) : null}
              {success ? (
                <Alert message={response} icon={faCheckCircle} type={undefined} />
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="fname" className="">
                        First Name
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={fname}
                        onChange={handleChange}
                        className="form-control"
                        id="fname"
                        name="fname"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="lname" className="">
                        Last Name
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={lname}
                        onChange={handleChange}
                        className="form-control"
                        id="lname"
                        name="lname"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="">
                    Email Address
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="phone"
                    value={phone}
                    onChange={handleChange}
                    className="form-control"
                    name="phone"
                    id="phone"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="msg">
                    Message
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    value={msg}
                    onChange={handleChange}
                    className="form-control"
                    name="msg"
                    id="msg"
                  />
                </div>

                <div className=" ">
                  <p>
                    Yes, I would like to receive email communications from Altudo.
                    I understand I can unsubscribe via links contained in the
                    email(s) and/or by emailing privacy@altudo.co
                  </p>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <span className="px-2">
                  {loader ? (
                    <FontAwesomeIcon icon={faSpinner} rotation={90} />
                  ) : null}
                </span>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactForm;
