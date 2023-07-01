import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import { onFormUpdateValidation, formValidation } from "../../utils";
import { Errors, Result, Status } from "../../interfaces";
import { contactImg } from "../../assets";
import "./FormContact.css";

export const FormContact = () => {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(initialForm);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<Status | null>(null);
  const [result, setResult] = useState<Result | undefined>();
  const [error, setError] = useState<Errors | null>(null);

  const onFormUpdate = (category: string, value: string) => {
    onFormUpdateValidation(category, value, setError);
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValidation(formDetails, setError)) {
      setButtonText("Sending...");

      emailjs
        .send(
          "service_n11yh8i",
          "template_kvlzdjq",
          formDetails,
          "pEHCErpfN_HcVxsKr"
        )
        .then(
          (result: EmailJSResponseStatus) => setResult(result),
          (error) => console.error(error)
        )
        .then(() => {
          console.log(result);

          if (result?.status === 200) {
            setStatus({ success: true, message: "Message sent successfully" });
          } else if (result?.status === 400) {
            setStatus({
              success: false,
              message: "Something went wrong, please try again later.",
            });
          }
          setFormDetails(initialForm);
          setButtonText("Send");
        });
    } else {
      setStatus({
        success: false,
        message: "Please complete the form before sending.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      placeholder="First Name"
                    />
                    {error?.type === "firstName" && (
                      <p className="error-form">{error.message}</p>
                    )}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      placeholder="Last Name"
                    />
                    {error?.type === "lastName" && (
                      <p className="error-form">{error.message}</p>
                    )}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      placeholder="Email Address"
                    />
                    {error?.type === "email" && (
                      <p className="error-form">{error.message}</p>
                    )}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      placeholder="Phone No."
                    />
                    {error?.type === "phone" && (
                      <p className="error-form">{error.message}</p>
                    )}
                  </Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    placeholder="Message"
                  ></textarea>
                  {error?.type === "message" && (
                    <p className="error-form">{error.message}</p>
                  )}
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>

                  {status?.success ? (
                    <Col>
                      <p className="success-message">{status.message}</p>
                    </Col>
                  ) : (
                    <Col>
                      <p className="error-message">{status?.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
