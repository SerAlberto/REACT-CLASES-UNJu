import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cards.css";

export default function Character(props) {
  return (
    <Card style={{ width: "14rem" }} className="mx-auto">
      <Link className="carta-link" to={`/charDetail/${props.id}`}>
        <Card.Img
          style={{ height: "13rem", width: "auto" }}
          className="m-2"
          variant="top"
          src={props.foto}
          alt="Foto"
        />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
}

/*<div>
      <img src={props.foto} alt="Foto" />
      <h3>{props.nombre} </h3>
    </div>*/

/* class Character extends React.Component {
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

export default Character; */
