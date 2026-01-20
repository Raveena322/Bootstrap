import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
        <Container>
          <Navbar.Brand href="#" className="brand-text">
            🚀 MyWebsite
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="content-section">
        <h1>Welcome to MyWebsite</h1>
        <p>
          This is a simple responsive website created using React and a UI
          component library. The navigation bar automatically adjusts for
          different screen sizes, providing a smooth user experience on both
          desktop and mobile devices.
        </p>

        <p>
          Using component libraries helps developers save time, maintain
          consistency, and build attractive user interfaces efficiently.
        </p>
      </Container>
    </>
  );
};

export default App;
