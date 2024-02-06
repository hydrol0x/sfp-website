import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import SFPButton from "../components/SFPButton";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Container fluid className="pt-4 ps-5 home intro-container">
        <Row className="home home-superheading">
          <h3>We are the</h3>
        </Row>
        <Row className="home home-heading">
          <h1>Society for</h1>
          <h1>Future Programmers</h1>
        </Row>
        <Row className="home intro-paragraph">
          <p>
            <em>
              Inspiring teens around Florida in programming and computer science
            </em>
          </p>
        </Row>
        <Row className="home intro-button mt-5">
          <Col as="div">
            <SFPButton text="Join our cause" styleName="red" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
