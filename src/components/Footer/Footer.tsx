import { Col, Container, Row } from "react-bootstrap";
import { HeaderImg, navIcon1, navIcon2 } from "../../assets";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={HeaderImg} alt="Logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/viviana-soriano/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon LinkedIn" />
              </a>
              <a href="https://github.com/VivianaS14" target="_blank">
                <img src={navIcon2} alt="Icon Github" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
