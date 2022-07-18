import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { Pokemon } from "../../context/PokemonContext.model";
import { SPokemonFormContainer, SPokemonInputContainer } from "./Create.styles";

type PokemonForm = Omit<Pokemon, "image">;

export const Create: React.FC = () => {
  const { createPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  const onSubmit = (formValues: PokemonForm) => {
    createPokemon({ ...formValues, image: "https://picsum.photos/100" });
    navigate("/pokemons");
  };

  const pokemonForm = useFormik<PokemonForm>({
    initialValues: {
      attack: 0,
      defense: 0,
      health: 0,
      name: "",
      type: "water",
    },
    onSubmit,
  });

  return (
    <SPokemonFormContainer>
      <form onSubmit={pokemonForm.handleSubmit}>
        <SPokemonInputContainer>
          <span>Pokemon name:</span>
          <input
            type="text"
            name="name"
            onChange={pokemonForm.handleChange}
            onBlur={pokemonForm.handleBlur}
            value={pokemonForm.values.name}
          />
        </SPokemonInputContainer>
        <SPokemonInputContainer>
          <span>Pokemon attack:</span>
          <input
            type="number"
            name="attack"
            onChange={pokemonForm.handleChange}
            onBlur={pokemonForm.handleBlur}
            value={pokemonForm.values.attack}
          />
        </SPokemonInputContainer>
        <SPokemonInputContainer>
          <span>Pokemon defense:</span>
          <input
            type="number"
            name="defense"
            onChange={pokemonForm.handleChange}
            onBlur={pokemonForm.handleBlur}
            value={pokemonForm.values.defense}
          />
        </SPokemonInputContainer>
        <SPokemonInputContainer>
          <span>Pokemon health:</span>
          <input
            type="number"
            name="health"
            onChange={pokemonForm.handleChange}
            onBlur={pokemonForm.handleBlur}
            value={pokemonForm.values.health}
          />
        </SPokemonInputContainer>
        <SPokemonInputContainer>
          <span>Pokemon type:</span>
          <select
            name="type"
            onChange={pokemonForm.handleChange}
            onBlur={pokemonForm.handleBlur}
            value={pokemonForm.values.type}
          >
            <option value={"fire"}>Fire</option>
            <option value={"water"}>Water</option>
          </select>
        </SPokemonInputContainer>
        <button type="submit">Save</button>
      </form>
    </SPokemonFormContainer>
  );
};
