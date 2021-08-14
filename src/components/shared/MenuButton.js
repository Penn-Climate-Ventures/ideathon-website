import s from 'styled-components'
import { mediaMaxWidth, GREY, LIGHT_BLUE } from "../../utils/constants"
import "../../pages/styles.scss"

//FIXME: temp changed font-family from Roboto Bold to Roboto since I 
//couldn't find the Roboto Bold link
const MenuButton = s.a`
    background-color: transparent;
    flex: 0 1 content;
    outline: none;
    padding: 0 1rem;
    color: ${GREY};
    cursor: pointer;
    z-index: -1;
    font-size: 1rem;
    font-family: lato; 
    font-weight: bold;
    transition: 0.2s;

    :hover {
        color: ${LIGHT_BLUE};
    }

    ${mediaMaxWidth("768px")} {
        padding: .5rem 1.25rem .5rem 1.25rem;
    }
`

export default MenuButton
