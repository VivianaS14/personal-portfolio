import { Col, Container, Row } from "react-bootstrap";
import { contactImg } from "../../assets";
import { useState } from "react";
import "./FormContact.css";

interface status {
  success: boolean;
  message: string;
}

export const FormContact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<status>();

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    // logica envio
    setTimeout(() => {
      console.log(formDetails);
    }, 5000);

    setButtonText("Send");
    const result = {
      code: 200,
    };

    setFormDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    if (result.code == 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
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
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      placeholder="Last Name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      placeholder="Phone No."
                    />
                  </Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>

                  {status?.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
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
