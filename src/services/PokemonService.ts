interface Pokemon {
  image: string;
  name: string;
  type: "water" | "fire";
  health: number;
  attack: number;
  defense: number;
}

const pokemons: Pokemon[] = [
  {
    image: "https://imageprovider.com/21ksi2",
    name: "Bulbasaur",
    type: "water",
    health: 200,
    attack: 100,
    defense: 60,
  },
];

export const getPokemons = () => pokemons;

export const getPokemon = (pokemonName: Pokemon["name"]) =>
  pokemons.find((pokemon) => pokemon.name === pokemonName);

export const createPokemon = (newPokemon: Pokemon) => {
  throw new Error("To be implemented");
};
