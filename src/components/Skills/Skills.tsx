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
        id: 1,
        skill: "React",
        image: reactLg,
      },
      {
        id: 2,
        skill: "JavaScript",
        image: jsLg,
      },
      {
        id: 3,
        skill: "TypeScript",
        image: typeScriptLg,
      },
      {
        id: 4,
        skill: "Java",
        image: javaLg,
      },
      {
        id: 5,
        skill: "MySQL",
        image: mysqlLg,
      },
      {
        id: 6,
        skill: "Redux",
        image: reduxLg,
      },
      {
        id: 7,
        skill: "HTML5",
        image: htmlLg,
      },
      {
        id: 8,
        skill: "CSS3",
        image: cssLg,
      },
      {
        id: 9,
        skill: "Sass",
        image: sassLg,
      },
      {
        id: 10,
        skill: "Figma",
        image: figmaLg,
      },
      {
        id: 11,
        skill: "Adobe XD",
        image: adobexdLg,
      },
      {
        id: 12,
        skill: "Git",
        image: gitLg,
      },
      {
        id: 13,
        skill: "GitHub",
        image: navIcon2,
      },
      {
        id: 14,
        skill: "Excel",
        image: excelLg,
      },
      {
        id: 15,
        skill: "Scrum",
        image: scrumLg,
      },
      {
        id: 16,
        skill: "Jest",
        image: jestLg,
      },
      {
        id: 17,
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
                {skills.map(({ image, skill, id }) => (
                  <div className="item" key={id}>
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
