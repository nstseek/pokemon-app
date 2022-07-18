import { useState } from "react";
import { Pokemon } from "../PokemonContext.model";

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([
    {
      image: "https://picsum.photos/100",
      name: "Bulbasaur",
      type: "water",
      health: 200,
      attack: 100,
      defense: 60,
    },
    {
      image: "https://picsum.photos/100",
      name: "Pikachu",
      type: "water",
      health: 200,
      attack: 100,
      defense: 60,
    },
    {
      image: "https://picsum.photos/100",
      name: "Charizard",
      type: "water",
      health: 200,
      attack: 100,
      defense: 60,
    },
  ]);

  const getPokemon = (pokemonName: Pokemon["name"]) =>
    pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
    );

  const createPokemon = (newPokemon: Pokemon) => {
    setPokemons((oldPokemons) => [...oldPokemons, newPokemon]);
  };

  return { pokemons, getPokemon, createPokemon };
};
