import { useMemo } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import {
  reactLg,
  jsLg,
  typeScriptLg,
  reduxLg,
  htmlLg,
  cssLg,
  javaLg,
  mysqlLg,
  figmaLg,
  adobexdLg,
  gitLg,
  navIcon2,
  excelLg,
  scrumLg,
  jestLg,
  vitestLg,
  sassLg,
} from "../../assets";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Skills = () => {
  const skills = useMemo(
    () => [
      {
        skill: "React",
        image: reactLg,
      },
      {
        skill: "JavaScript",
        image: jsLg,
      },
      {
        skill: "TypeScript",
        image: typeScriptLg,
      },
      {
        skill: "Java",
        image: javaLg,
      },
      {
        skill: "MySQL",
        image: mysqlLg,
      },
      {
        skill: "Redux",
        image: reduxLg,
      },
      {
        skill: "HTML5",
        image: htmlLg,
      },
      {
        skill: "CSS3",
        image: cssLg,
      },
      {
        skill: "Sass",
        image: sassLg,
      },
      {
        skill: "Figma",
        image: figmaLg,
      },
      {
        skill: "Adobe XD",
        image: adobexdLg,
      },
      {
        skill: "Git",
        image: gitLg,
      },
      {
        skill: "GitHub",
        image: navIcon2,
      },
      {
        skill: "Excel",
        image: excelLg,
      },
      {
        skill: "Scrum",
        image: scrumLg,
      },
      {
        skill: "Jest",
        image: jestLg,
      },
      {
        skill: "Vitest",
        image: vitestLg,
      },
    ],
    []
  );

  return (
    <section className="skills" id="skills" data-testid="skills-section">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Mostly of my skills are for the frontend development, but also I
                have been prepared for the backend, stay tuned for the new ones.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                data-testid="skill-carousel"
              >
                {skills.map(({ image, skill }) => (
                  <div className="item">
                    <img src={image} alt="Image" />
                    <h5>{skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687580138/Portfolio/color-sharp_cn9nul.png"
        }
        alt="Bg"
        className="background-image-left"
      />
    </section>
  );
};
