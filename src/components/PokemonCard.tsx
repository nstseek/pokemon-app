import { Pokemon } from "../context/PokemonContext.model";
import {
  SPokemonContainer,
  SPokemonData,
  SPokemonDataContent,
  SPokemonDataHeader,
  SPokemonImage,
} from "./PokemonCard.styles";

export const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <SPokemonContainer>
      <SPokemonImage src={pokemon.image} />
      <SPokemonData>
        <SPokemonDataHeader>Name:</SPokemonDataHeader>
        <SPokemonDataContent>{pokemon.name}</SPokemonDataContent>
        <SPokemonDataHeader>Type:</SPokemonDataHeader>
        <SPokemonDataContent>{pokemon.type}</SPokemonDataContent>
        <SPokemonDataHeader>Health:</SPokemonDataHeader>
        <SPokemonDataContent>{pokemon.health}</SPokemonDataContent>
        <SPokemonDataHeader>Attack:</SPokemonDataHeader>
        <SPokemonDataContent>{pokemon.attack}</SPokemonDataContent>
        <SPokemonDataHeader>Defense:</SPokemonDataHeader>
        <SPokemonDataContent>{pokemon.defense}</SPokemonDataContent>
      </SPokemonData>
    </SPokemonContainer>
  );
};
