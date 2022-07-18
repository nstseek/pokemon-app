import styled, { CSSObject } from "styled-components";

export const SPokemonContainer = styled.div(
  (): CSSObject => ({
    display: "flex",
    flexDirection: "column",
    padding: 21,
    gap: 8,
    width: 300,
    borderRadius: 10,
    boxShadow: `0px 0px 10px 10px #aaa`,
  })
);

export const SPokemonImage = styled.img((): CSSObject => ({}));

export const SPokemonData = styled.div(
  (): CSSObject => ({
    margin: "0 25px",
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "80px 1fr",
  })
);

export const SPokemonDataHeader = styled.span(
  (): CSSObject => ({
    fontWeight: "bold",
  })
);

export const SPokemonDataContent = styled.span((): CSSObject => ({}));
