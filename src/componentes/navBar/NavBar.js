import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <h1>
          <Link to="/">Mi anime de preferencia-Jujutsu Kaisen</Link>
        </h1>
        <p>
          <Link to="/charDetail">Character Detail</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </nav>
    );
  }
}

export default NavBar;
