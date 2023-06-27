import { useMemo } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "..";
import "./Projects.css";

export const Projects = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "To Do App",
        description:
          "To Do made it with React and JavaScript, styled with Sass, and using Axios to get, post and delete tasks.",
        imgURL:
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687812295/Portfolio/ToDoApp_thtzq5.png",
        deploy: "https://to-do-app-vs.netlify.app",
        stack: ["React", "JavaScript", "Axios", "Sass"],
      },
      {
        id: 2,
        title: "WhatsApp Clone",
        description:
          "WhatsApp clone made it with React and JavaScript, using Firebase - Firestore realtime database, styled with Material UI, react router, react context API implemented, Google authentication and deployment using Firebase.",
        imgURL:
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687812295/Portfolio/WhatsAppClone_ctneom.png",
        deploy: "https://whatsapp-clone-e9a6a.web.app",
        stack: ["React", "JavaScript", "Firebase - Firestore", "Material UI"],
      },
      {
        id: 3,
        title: "Librería Triple AAA",
        description:
          "Group project for a Digital library for interchange of books, the user can login with email or google auth, post books he want to interchange, look for other books, connect with other readers and post books services for the community.",
        imgURL:
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687812298/Portfolio/TripleAAA_fsqe7f.png",
        deploy: "https://makaia-libreria.web.app/#/",
        stack: [
          "React",
          "JavaScript",
          "Material UI",
          "Firebase - Firestore",
          "Redux",
          "Sass",
        ],
      },
      {
        id: 4,
        title: "Cocktails App",
        description:
          "App for a cocktail club, where user can find his table, check the menu, make and order, edit it, and finally make his payment; also the app has a admin user to post the daily menu, stack control and sales report.",
        imgURL:
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687812295/Portfolio/CocktailApp_kvjs28.png",
        deploy: "https://cocktail-app-vs.netlify.app",
        stack: [
          "React",
          "JavaScript",
          "Material UI",
          "Redux",
          "Sass",
          "Axios",
          "Firebase - Firestore",
        ],
      },
      {
        id: 5,
        title: "Pokédex",
        description:
          "Pokédex where you can find different pokemon, items, and locations. Also you can explore more details about each pokemon, item and location. Made it with React, react query, TypeScript and tailwind CSS",
        imgURL:
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687812295/Portfolio/Pokedex_d8rhs0.png",
        deploy: "https://pokedex-vs.netlify.app",
        stack: ["React", "TypeScript", "Axios", "React Query", "TailwindCSS"],
      },
      {
        id: 6,
        title: "Note App",
        description:
          "Note App made it with React, redux toolkit and Tailwind CSS.",
        imgURL:
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687812295/Portfolio/NoteApp_dyq1tr.png",
        deploy: "https://react-note-app-beige.vercel.app",
        stack: ["React", "JavaScript", "Axios", "Sass"],
      },
      {
        id: 7,
        title: "Landing Page Verdepino",
        description:
          "Landing page for Verdepino Housing Project, where you can find all you need for the new building project, this page include React, TypeScript, TailwindCSS, Sass and Map section using Leaflet.",
        imgURL:
          "https://res.cloudinary.com/dguvbp6nw/image/upload/v1687812297/Portfolio/LandingVerdepino_kcbbjv.png",
        deploy: "https://landing-verdepino.netlify.app",
        stack: ["React", "TypeScript", "TailwindCSS", "Sass", "React Leaflet"],
      },
    ],
    []
  );

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Personal and group projects made it with React, JavaScript and
              TypeScript.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="To Do App">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="mb-5 justify-content-center align-items-center"
              >
                {projects.map(({ title, id }) => (
                  <Nav.Item key={id}>
                    <Nav.Link eventKey={title}>{title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {projects.map(
                  ({ description, id, imgURL, title, deploy, stack }) => (
                    <Tab.Pane
                      eventKey={title}
                      key={id}
                      className="tab-pane-proj"
                    >
                      <Row className="justify-content-center">
                        <ProjectCard
                          title={title}
                          description={description}
                          imgUrl={imgURL}
                          deploy={deploy}
                          stack={stack}
                        />
                      </Row>
                    </Tab.Pane>
                  )
                )}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src="https://res.cloudinary.com/dguvbp6nw/image/upload/v1687580338/Portfolio/color-sharp2_paxfay.png"
        alt="Bg-image"
        className="background-image-right"
      />
    </section>
  );
};
