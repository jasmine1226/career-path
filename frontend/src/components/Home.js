import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = props => {
  return (
    <>
      <Carousel>
        {props.courses.map(course => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/800/400"
                alt={course.title}
              />
              <Carousel.Caption>
                <h3>{course.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <h1 id="home-page-title">Welcome to AWS Learning Hub</h1>
    </>
  );
};

export default Home;
