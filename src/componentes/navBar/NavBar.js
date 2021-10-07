import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar className="mb-4" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Jujutsu Kaisen
          </Link>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/charDetail">
              Character Detail
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;

/*<nav>
        <h1>
          <Link to="/">Jujutsu Kaisen</Link>
        </h1>
        <p>
          <Link to="/charDetail">Character Detail</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </nav>*/
