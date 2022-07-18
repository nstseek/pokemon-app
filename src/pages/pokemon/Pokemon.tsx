import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { PokemonContext } from "../../context/PokemonContext";

export const Pokemon: React.FC = () => {
  const { name } = useParams();
  const { getPokemon } = useContext(PokemonContext);

  const selectedPokemon = getPokemon(name || "");

  return selectedPokemon ? (
    <PokemonCard pokemon={selectedPokemon} />
  ) : (
    <span>Pokemon {name} was not found!</span>
  );
};
