import styled, { CSSObject } from "styled-components";

export const SPokemonListContainer = styled.div(
  (): CSSObject => ({
    display: "flex",
    flexWrap: "wrap",
    gap: 25,
  })
);
