import { createContext } from "react";
import { usePokemon } from "./hooks/usePokemon";

export const PokemonContext = createContext<ReturnType<typeof usePokemon>>({
  createPokemon: () => {
    return;
  },
  getPokemon: () => undefined,
  pokemons: [],
});
