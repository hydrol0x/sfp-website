import React from "react";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="home-superheading">
          <h3>We are the</h3>
        </Row>
        <Row className="home-heading">
          <h1>Society for Future Programmers</h1>
        </Row>
        <Row className="intro-paragraph">
          <p>
            <em>
              Inspiring teens aruond Florida in programming and computer science
            </em>
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Home;
