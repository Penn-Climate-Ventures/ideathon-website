import s from 'styled-components'
import { mediaMaxWidth } from "../../utils/constants"

const Button = s.a`
    background-color: transparent;
    border: .2rem solid #363635;
    outline: none;
    display: inline-block;
    margin-top: 1vw;
    padding: 0.3rem 2.8rem;
    color: #363635;
    cursor: pointer;
    border-radius: 999px;
    z-index: -1;
    font-size: 1.2rem;
    font-family: roboto;
    font-weight: bold;
    transition: 0.2s;

    :hover {
        background-color: #363635;
        color: white;
    }

    ${mediaMaxWidth("768px")} {
        padding: .5rem 1.25rem .5rem 1.25rem;
    }
`

export default Button
