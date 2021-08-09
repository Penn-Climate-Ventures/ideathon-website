import s from "styled-components"
import {STEEL_BLUE, GREEN, FOCUS_GREEN} from "../../utils/constants"

export const Title = s.h1`
  font-size:${({ fontSize }) => fontSize || `4rem`};
  font-family: Roboto;
  font-weight: bold;
  color: ${STEEL_BLUE};
`

export const Subtitle = s.h2`
  font-size:${({ fontSize }) => fontSize || `2rem`};
  font-family: ${({avenir}) => avenir ? `Avenir` : `Roboto`};
  font-weight: bold;
  ${({center}) => center && `text-align: center`}
`

export const Text = s.p`
  font-size:${({ fontSize }) => fontSize || `1.1rem`};
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
  color: ${({fontColor}) => fontColor || `black`};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
`

export const SubText = s.p`
  font-size:${({ fontSize }) => fontSize || `1rem`};
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
`

export const Link = s.a`
  font-size:${({ fontSize }) => fontSize || `1.1rem`};
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
  color: ${GREEN};
  ${({bold}) => bold && `font-weight: bold`};
  ${({center}) => center && `text-align: center`};
  transition: 0.1s;

  &:hover {
    color: ${FOCUS_GREEN};
  }
`