import { useContext } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { PokemonContext } from "../../context/PokemonContext";
import { SPokemonListContainer } from "./Pokemons.styles";

export const Pokemons: React.FC = () => {
  const { pokemons } = useContext(PokemonContext);

  return (
    <SPokemonListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </SPokemonListContainer>
  );
};
