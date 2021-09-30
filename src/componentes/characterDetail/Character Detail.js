import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function CharacterDetail(props) {
  const parametro = useParams();

  const [detallePersonaje, setDetallePersonaje] = useState(
    props.charactersInfo[0]
  );

  useEffect(() => {
    if (Object.keys(parametro).length === 0) {
      setDetallePersonaje(props.charactersInfo[0]);
    } else {
      setDetallePersonaje(props.charactersInfo[parametro.id]);
    }
  }, [parametro]);

  const mostrarDescripcion = (e) => {
    setDetallePersonaje(() => {
      return props.charactersInfo.find(
        (element) => element.id === parseInt(e.target.value)
      );
    });
  };

  return (
    <div>
      {Object.keys(parametro).length === 0 && (
        <select name="personajes" onChange={(e) => mostrarDescripcion(e)}>
          {props.charactersInfo.map((character, index) => {
            return (
              <option
                key={index}
                value={character.id}
              >{`${character.nombre} ${character.apellido}`}</option>
            );
          })}
        </select>
      )}
      <div>
        <h2>{`${detallePersonaje?.nombre} ${detallePersonaje?.apellido}`}</h2>
        <img src={detallePersonaje?.foto} alt="imagen" />
        <p>
          {`Género ${detallePersonaje?.genero}, tiene ${detallePersonaje?.edad} años y mide
            ${detallePersonaje?.altura} centímetros de altura`}
        </p>
        <p>
          {`Es ${detallePersonaje?.personalidad}, su habilidad especial es ${detallePersonaje?.habilidad} y su ocupación es ${detallePersonaje?.ocupacion}`}
        </p>
      </div>
    </div>
  );
}

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
