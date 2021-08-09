import React from "react"
import s from "styled-components"
import { Subtitle, Text, mediaMaxWidth } from "../../components/shared/Typography"
import { GREEN } from "../../utils/constants"


export const Logo = s.img`
    display: block;
    margin: auto;
    width: 30vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
`

export const Columns = s.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 2vw auto;
`

export const Headshot = s.img`
    object-fit: cover;
    width: 12vw;
    height: 12vw;
`

export const Name = s.figcaption`
    font-family: roboto;
    font-weight: bold;
    color: ${GREEN};
    font-size: 20px;
`

export const ColumnText = s.div`
    flex: 50vw;
    width: 50%;
    ${({right}) => right ? `padding-left: 2vw` : `padding-right 2vw`}
`

export const TeamSummary = s(Text)`
    font-family: roboto;
    font-weight: bold;
`

export const TeamSubtitle = s(Subtitle)`
    font-size: 1.4rem;
`

export const Figure = ({name, source}) => (
    <figure>
        <Headshot src={source} alt ={name}/>
        <Name>{name}</Name>
    </figure>
)