import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { usePokemon } from "./context/hooks/usePokemon";
import { PokemonContext } from "./context/PokemonContext";
import { Create } from "./pages/create/Create";
import { Pokemon } from "./pages/pokemon/Pokemon";
import { Pokemons } from "./pages/pokemons/Pokemons";
import { Redirect } from "./pages/Redirect/Redirect";

export default function App() {
  const pokemonContextValue = usePokemon();

  return (
    <PokemonContext.Provider value={pokemonContextValue}>
      <Router>
        <Routes>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Redirect />} />
        </Routes>
      </Router>
    </PokemonContext.Provider>
  );
}
