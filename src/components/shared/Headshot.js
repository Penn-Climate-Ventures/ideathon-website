import React from "react"
import s from "styled-components"
import { Text, Link, Subtitle } from "./Typography"

const ImageSize = `190px`;

const Image = s.img`
    width: ${ImageSize};
    height: ${ImageSize};
    object-fit: cover;
    border-radius: 50%;
    margin: 10px;
`

const Caption = s.figcaption`
    width: 250px;
    font-family: 'Lato', sans-serif;
    font-size: 1.1rem;
    text-align: center;
`

const Headshot = ({imageSrc, imageAlt, name, description, linkedIn}) => (
    <figure css={`text-align: center`}>
        {linkedIn 
            ? <Link href={linkedIn} target="_blank" rel="noopener noreferrer">
                <Image src={imageSrc} alt={imageAlt}/>
            </Link> 
            : <Image src={imageSrc} alt={imageAlt}/>}
        <Caption>
            <Subtitle fontSize="1.1rem" css={`letter-spacing: 5px`}>{name}</Subtitle>
            <br/>
            <Text>{description}</Text>
        </Caption>
    </figure>
)

export default Headshot