import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Image, Row } from "react-bootstrap";
import "./characterDetail.css";

export default function CharacterDetail(props) {
  const parametro = useParams();

  const [state, setState] = useState({
    detallePersonaje: props.charactersInfo[0],
  });

  useEffect(() => {
    if (Object.keys(parametro).length !== 0) {
      setState({ detallePersonaje: props.charactersInfo[parametro.id] });
    } else {
      setState({ detallePersonaje: props.charactersInfo[0] });
    }
  }, [parametro]);

  const mostrarDescripcion = (e) => {
    setState({
      detallePersonaje: props.charactersInfo.find(
        (element) => element.id === parseInt(e.target.value)
      ),
    });
  };

  return (
    <>
      {Object.keys(parametro).length === 0 && (
        <select
          className="form-select mb-5 mx-auto"
          style={{ width: "20rem" }}
          name="personajes"
          onChange={(e) => mostrarDescripcion(e)}
        >
          {props.charactersInfo.map((character, index) => {
            return (
              <option
                key={index}
                value={character.id}
                selected={character.id === state.detallePersonaje?.id}
              >{`${character.nombre} ${character.apellido}`}</option>
            );
          })}
        </select>
      )}
      <Row>
        <div className="col-12 col-xl-6 col-sm-12 mb-4">
          <Image
            className="imagen-personaje"
            src={state.detallePersonaje?.foto}
            alt="imagen"
            roundedCircle
          />
        </div>
        <div className="col-12 col-xl-6 col-sm-12">
          <Card className="carta-info">
            <Card.Header className="fs-4 text-light">{`${state.detallePersonaje?.nombre} ${state.detallePersonaje?.apellido}`}</Card.Header>
            <Card.Body>
              <Card.Text>
                {`Género ${state.detallePersonaje?.genero}, tiene ${state.detallePersonaje?.edad} años y mide
            ${state.detallePersonaje?.altura} centímetros de altura`}
              </Card.Text>
              <Card.Text>
                {`Es ${state.detallePersonaje?.personalidad}, su habilidad especial es ${state.detallePersonaje?.habilidad} y su ocupación es ${state.detallePersonaje?.ocupacion}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </>
  );
}

/*<h2>{`${state.detallePersonaje?.nombre} ${state.detallePersonaje?.apellido}`}</h2>
        <img src={state.detallePersonaje?.foto} alt="imagen" />
        <p>
          {`Género ${state.detallePersonaje?.genero}, tiene ${state.detallePersonaje?.edad} años y mide
            ${state.detallePersonaje?.altura} centímetros de altura`}
        </p>
        <p>
          {`Es ${state.detallePersonaje?.personalidad}, su habilidad especial es ${state.detallePersonaje?.habilidad} y su ocupación es ${state.detallePersonaje?.ocupacion}`}
        </p>*/
/* class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detallePersonaje: JujutsuKaisen.Characters[0],
    };
  }

  mostrarDescripcion(e) {
    this.setState(() => {
      return {
        detallePersonaje: JujutsuKaisen.Characters.find(
          (element) => element.id === parseInt(e.target.value)
        ),
      };
    });
  }

  render() {
    return (
      <div>
        <select name="personajes" onChange={(e) => this.mostrarDescripcion(e)}>
          {JujutsuKaisen.Characters.map((character) => {
            return (
              <option
                value={character.id}
              >{`${character.nombre} ${character.apellido}`}</option>
            );
          })}
        </select>
        <div>
          <h2>
            {`${this.state.detallePersonaje.nombre} ${this.state.detallePersonaje.apellido}`}
          </h2>
          <img src={this.state.detallePersonaje.foto} alt="" />
          <p>
            {`Género ${this.state.detallePersonaje.genero}, tiene ${this.state.detallePersonaje.edad} años y mide
            ${this.state.detallePersonaje.altura} centímetros`}
          </p>
          <p>
            {`Es ${this.state.detallePersonaje.personalidad}, su habilidad especial es ${this.state.detallePersonaje.habilidad} y su ocupación es ${this.state.detallePersonaje.ocupacion}`}
          </p>
        </div>
      </div>
    );
  }
}

export default CharacterDetail; */
