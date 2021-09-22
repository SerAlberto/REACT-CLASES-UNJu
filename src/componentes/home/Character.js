import React from "react";

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.foto} alt="Foto" />
        <h3>{this.props.nombre} </h3>
      </div>
    );
  }
}

export default Character;
