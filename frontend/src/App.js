import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import CareerPathContainer from "./containers/CareerPathContainer";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Career Path</Navbar.Brand>
      </Navbar>
      <CareerPathContainer />
    </div>
  );
}

export default App;
