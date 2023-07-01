import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Banner.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const period = 2000;

  const toRotate = useMemo(
    () => ["Front-End Developer", "Web Designer", "React Developer"],
    []
  );

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(index - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(index + 1);
    }
  }, [index, isDeleting, loopNum, text.length, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, text, tick]);

  return (
    <section className="banner" id="home" data-testid="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={6} xxl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {"Hi I'm Viviana Soriano"}
                    <br />
                    <span className="wrap">{text}</span>
                  </h1>

                  <p>
                    Frontend developer with over +6 months of experience
                    developing web applications with JavaScript, TypeScript and
                    React. Music and Cat lover.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    <a href="#projects">
                      See my projects <BsArrowRightCircle />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={6} xxl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687579511/Portfolio/photo_w8fipf.png"
                    }
                    alt="Header image"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
