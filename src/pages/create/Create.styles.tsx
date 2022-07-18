import styled, { CSSObject } from "styled-components";

export const SPokemonFormContainer = styled.div(
  (): CSSObject => ({
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 400,
  })
);

export const SPokemonInputContainer = styled.div(
  (): CSSObject => ({
    display: "flex",
    flexDirection: "column",
    gap: 5,
  })
);
