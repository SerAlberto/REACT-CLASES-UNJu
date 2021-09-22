import React from "react";
import JujutsuKaisen from "../../data.json";
import Character from "./Character";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {JujutsuKaisen.Characters.map((character) => {
          return (
            <Character
              foto={character.foto}
              nombre={`${character.nombre} ${character.apellido}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
