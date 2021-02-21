import s from "styled-components"

export const Title = s.h1`
  font-size: ${({ fontSize }) => fontSize || '8rem'};
  font-family: Roboto;
`

export const Subtitle = s.h2`
  font-size: ${({ fontSize }) => fontSize || '3.5rem'};
  font-family: Metropolis;
  font-weight: bold;
`

export const Text = s.p`
  font-size: ${({ fontSize }) => fontSize || '3rem'};
  font-family: Metropolis;
`

export const SubText = s.p`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  font-family: Metropolis
`