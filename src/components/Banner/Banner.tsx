import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import { HeaderImg } from "../../assets";
import "./Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const period = 2000;

  const toRotate = useMemo(
    () => ["Frontend Developer", "Web Designer", "React Developer"],
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
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{"Hi I'm Viviana Soriano"}</h1>
            <span className="wrap">{text}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              explicabo nulla ad repellendus ex voluptate nisi quae nihil
              molestias fugit sunt soluta numquam a accusamus, aliquam corporis,
              adipisci quisquam dolor!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <BsArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={4} xl={6} xxl={6}>
            <img src={HeaderImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
