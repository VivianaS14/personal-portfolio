import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { navIcon1, navIcon2, HeaderImg } from "../../assets";
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  // Change the background color while scrolling
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={HeaderImg} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <button onClick={() => console.log("connect")}>
              <a href="#connect">Let's Connect</a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
