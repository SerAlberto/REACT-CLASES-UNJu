import React from "react";
import { Link } from "react-router-dom";
import Character from "./Character";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
