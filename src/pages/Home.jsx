import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import SFPButton from "../components/SFPButton";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";

const imageSources = [
  "https://github.com/hydrol0x/sfp-website/assets/34951139/24acf975-20f0-4bd0-a507-8aad58e806d1",
  "https://github.com/hydrol0x/sfp-website/assets/34951139/2bdc0224-59c8-424f-b771-a14de8720821",
  "https://github.com/hydrol0x/sfp-website/assets/34951139/ea362269-eaba-40ed-8047-dc7922738888",
  "https://github.com/hydrol0x/sfp-website/assets/34951139/8395f60f-013a-41ec-b156-9e7e1f9edabc",
];

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
        <Row className="home intro-paragraph">
          <h4>
            <em>Check out what we've done, and what's coming up!</em>
          </h4>
        </Row>
        <Row className="home event">
          <Container className="interschool-container">
            <Row>
              <Col as="div" className="event" id="event-heading">
                <h1 className="event">
                  Interschool
                  <br />
                  Competition
                </h1>
              </Col>
            </Row>
            <Row className="event-content event">
              <Col as="div" className="event" id="event-para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et metus est. Aliquam lacinia felis nibh, id semper nulla
                  maximus sagittis. Proin lacus massa, tristique rhoncus augue
                  ac, viverra ullamcorper arcu. Donec cursus urna eros, a
                  volutpat odio feugiat ac. Morbi sed luctus justo. Donec
                  gravida eget lacus et scelerisque. Phasellus pulvinar ex et
                  dignissim malesuada.
                </p>
              </Col>
              <Col>
                <Row>
                  <Col as="div" className="event-stat">
                    <h2>65+</h2>
                    <h3>competitors</h3>
                  </Col>
                </Row>
                <Row>
                  <Col as="div" className="event-stat">
                    <h2>4</h2>
                    <h3>schools</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-md-center event-carousel">
              <Col md={6} className="">
                {/* <img
                  src="https://github.com/hydrol0x/hydrol0x.github.io/blob/main/src/assets/testpictures.png?raw=true"
                  height="500"
                /> */}
                <Carousel images={imageSources} />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default Home;
