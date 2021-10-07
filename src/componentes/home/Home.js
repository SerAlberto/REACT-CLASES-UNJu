import React from "react";
import Character from "./Character";
import { Row, Col, Container } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="mb-4">
        <Row xs={1} md={2} xl={4} className="g-4">
          {this.props.charactersInfo.map((character, index) => {
            return (
              <Col key={index}>
                <Character
                  foto={character.foto}
                  nombre={`${character.nombre} ${character.apellido}`}
                  id={character.id}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Home;

/*<div>
        {this.props.charactersInfo.map((character, index) => {
          return (
            <Link key={index} to={`/charDetail/${character.id}`}>
              <Character
                foto={character.foto}
                nombre={`${character.nombre} ${character.apellido}`}
              />
            </Link>
          );
        })}
      </div>*/
