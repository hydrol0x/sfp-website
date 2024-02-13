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
      <Container fluid className="pt-4 ps-5 home intro-container" id="home">
        <a href="#home"></a>
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
            <SFPButton text="Join our cause" styleName="red" link="#donate" />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="pt-5 ps-5 pb-5 home section mission-container"
        id="mission"
      >
        <a href="#mission"></a>
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
      <Container
        fluid
        className="pt-5 ps-5 pb-5 home section events-container"
        id="events"
      >
        <a href="#events"></a>
        <Row className="pt-5 home home-heading">
          <h1>Events</h1>
        </Row>
        <Row className="home intro-paragraph">
          <h4>
            <em>Check out what we've done, and what's coming up!</em>
          </h4>
        </Row>
        <Row className="home event">
          <Container className="mt-5 statewide-container">
            <Row>
              <Col as="div" className="event" id="event-heading">
                <h1 className="event">State Tournament</h1>
              </Col>
            </Row>
            <Row className="event-content event">
              <Col as="div" className="event" id="statewide-para">
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
              <Col className="event-stats">
                <Row>
                  <Col as="div" className="statewide-event-stat event-stat">
                    <h2>Florida-wide</h2>
                  </Col>
                </Row>
                <Row>
                  {/* <Col as="div" className="event-stat">
                    <h1>4</h1>
                    <h3>schools</h3>
                  </Col> */}
                  <Col as="div" className="statewide-event-stat event-stat">
                    <h2>$100s in prizes</h2>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-md-center event-carousel">
              <Col md={6} className="event">
                <h1 id="register-button">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeix2EtTRw968kkgJ0izsKtumMHBnGDJdh0gDZki8jvjYfKHQ/viewform?usp=sf_link">
                    Register
                  </a>
                </h1>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5 interschool-container">
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
              <Col className="event-stats">
                <Row>
                  <Col as="div" className=" event-stat">
                    <h1>65+</h1>
                    <h2>competitors</h2>
                  </Col>
                </Row>
                <Row>
                  <Col as="div" className="event-stat">
                    <h1>4</h1>
                    <h3>schools</h3>
                  </Col>
                  <Col as="div" className="event-stat">
                    <h1>$275</h1>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-md-center event-carousel">
              <Col md={7} className="">
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
      <Container
        fluid
        className="pt-5 pb-5 home section about-container"
        id="about"
      >
        <Row className="pt-5 ps-5 home home-heading">
          <h1>About Us</h1>
        </Row>
        <Row className="ps-5  home intro-paragraph">
          <h4>
            <em>Made for teens, by teens</em>
          </h4>
        </Row>
        <Row className="pt-5 ms-4 about-images-row">
          <Col className="about-img">
            <img src="https://media.discordapp.net/attachments/476018362363805696/1194287413766393976/image0-4.png?ex=65d4b7d4&is=65c242d4&hm=72257069d20d0aa121160c98ef2684ef7a9d45558388245ab3ed279afd05a0b1&=&format=webp&quality=lossless" />
            <p>
              <h1>
                <a href="https://www.linkedin.com/in/luca-pishos-0475622a4/">
                  Luca Pishos
                </a>
                <h5>
                  <em>President & Co-founder</em>
                </h5>
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              metus est. Aliquam lacinia felis nibh, id semper nulla maximus
              sagittis.
            </p>
          </Col>
          <Col className="about-img">
            <img src="https://github.com/hydrol0x/sfp-website/assets/34951139/ab412d3c-a0b1-4e6a-a882-0869d0ab9fd8" />
            <p>
              <h1>
                <a href="https://www.jacobryabinky.com">Jacob Ryabinky </a>
                <h5>
                  <em>Vice-President & Co-founder</em>
                </h5>
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              metus est. Aliquam lacinia felis nibh, id semper nulla maximus
              sagittis.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
