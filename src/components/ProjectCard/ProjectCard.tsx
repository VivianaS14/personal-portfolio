import { Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import "./ProjectCard.css";

interface Props {
  title: string;
  description: string;
  imgUrl: string;
  deploy: string;
  stack: string[];
}

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  deploy,
  stack,
}: Props) => {
  return (
    <Col size={12}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`Project ${title}`} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <ul>
            <li>Stack:</li>
            {stack.map((item, i) => (
              <li key={i}>{item},</li>
            ))}
          </ul>
          <a href={deploy} target="_blank" rel="noopener noreferrer">
            Link to {title} <BsArrowRightCircle />
          </a>
        </div>
      </div>
    </Col>
  );
};
