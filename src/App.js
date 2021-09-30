import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./componentes/navBar/NavBar";
import Home from "./componentes/home/Home";
import CharacterDetail from "./componentes/characterDetail/Character Detail";
import About from "./componentes/about/About";
import JujutsuKaisen from "./data.json";

export default function App() {
  const [charactersInfo, setCharactersInfo] = useState([]);

  useEffect(() => {
    setCharactersInfo(JujutsuKaisen.Characters);
  }, []);

  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home charactersInfo={charactersInfo} />
        </Route>

        <Route exact path="/charDetail">
          <CharacterDetail charactersInfo={charactersInfo} />
        </Route>

        <Route path="/charDetail/:id">
          <CharacterDetail charactersInfo={charactersInfo} />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route>
          <h1> ERROR 404 NOT FOUND </h1>
        </Route>
      </Switch>
    </>
  );
}

/* class App extends React.Component {
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

export default App; */
