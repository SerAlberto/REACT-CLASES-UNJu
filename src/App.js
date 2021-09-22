import "./App.css";
import React from "react";
import NavBar from "./componentes/navBar/NavBar";
import Home from "./componentes/home/Home";
import CharacterDetail from "./componentes/characterDetail/Character Detail";
import About from "./componentes/about/About";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Home />
        <CharacterDetail />
        <About />
      </>
    );
  }
}

export default App;
