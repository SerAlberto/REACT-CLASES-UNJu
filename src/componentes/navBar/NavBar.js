import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1>Mi anime de preferencia-Jujutsu Kaisen</h1>
          <a href="/">Character Detail</a>
          <a href="/">About</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
