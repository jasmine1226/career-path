import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placeimg.com/800/400/tech/grayscale"
            alt="Course Highlight 1"
          />
          <Carousel.Caption>
            <h3>Course Highlight 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placeimg.com/800/400/arch/grayscale"
            alt="Course Highlight 2"
          />

          <Carousel.Caption>
            <h3>Course Highlight 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placeimg.com/800/400/people/grayscale"
            alt="Course Highlight 3"
          />

          <Carousel.Caption>
            <h3>Course Highlight 3</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 id="home-page-title">Welcome to AWS Learning Hub</h1>
    </>
  );
};

export default Home;
