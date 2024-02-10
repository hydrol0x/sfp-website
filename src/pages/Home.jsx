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
          <h4>
            <em>
              Inspiring teens around Florida in programming and computer science
            </em>
          </h4>
        </Row>
        <Row className="home intro-button mt-5">
          <Col as="div">
            <SFPButton text="Join our cause" styleName="red" />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="pt-5 ps-5 pb-5 home section mission-container"
      >
        <Row className="pt-5 home home-heading">
          <h1>Our Vision</h1>
        </Row>
        <Row className="home mission-paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            metus est. Aliquam lacinia felis nibh, id semper nulla maximus
            sagittis. Proin lacus massa, tristique rhoncus augue ac, viverra
            ullamcorper arcu. Donec cursus urna eros, a volutpat odio feugiat
            ac. Morbi sed luctus justo. Donec gravida eget lacus et scelerisque.
            Phasellus pulvinar ex et dignissim malesuada.
          </p>
        </Row>
      </Container>
      <Container fluid className="pt-5 ps-5 pb-5 home section events-container">
        <Row className="pt-5 home home-heading">
          <h1>Events</h1>
        </Row>
        <Row className="home mission-paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            metus est. Aliquam lacinia felis nibh, id semper nulla maximus
            sagittis. Proin lacus massa, tristique rhoncus augue ac, viverra
            ullamcorper arcu. Donec cursus urna eros, a volutpat odio feugiat
            ac. Morbi sed luctus justo. Donec gravida eget lacus et scelerisque.
            Phasellus pulvinar ex et dignissim malesuada.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Home;
