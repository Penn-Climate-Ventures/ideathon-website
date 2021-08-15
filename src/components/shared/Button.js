import s from 'styled-components'
import { mediaMaxWidth, LIGHT_BLUE } from "../../utils/constants"

const Button = s.a`
    background-color: transparent;
    border: .2rem solid ${LIGHT_BLUE};
    outline: none;
    display: inline-block;
    margin-top: 1vw;
    padding: 0.3rem 2.8rem;
    color: ${LIGHT_BLUE};
    cursor: pointer;
    border-radius: 999px;
    z-index: -1;
    font-size: 1.3rem;
    font-family: Lato;
    font-weight: bold;
    transition: 0.2s;
    text-align: center;
    width: max-content;

    :hover {
        background-color: ${LIGHT_BLUE};
        color: white;
    }

    ${mediaMaxWidth("768px")} {
        padding: .5rem 1.25rem .5rem 1.25rem;
    }
`

export default Button
