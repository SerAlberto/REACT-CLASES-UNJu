import React from "react";
import JujutsuKaisen from "../../data.json";

class CharacterDetail extends React.Component {
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

export default CharacterDetail;
