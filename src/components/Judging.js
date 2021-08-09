import React from "react"
import s from "styled-components"
import { Subtitle, Text } from "./shared/Typography"
import { FOREST_GREEN, STEEL_BLUE, GREEN, FOCUS_GREEN, mediaMaxWidth } from "../utils/constants.js"
import Button from "../components/shared/Button"
import Headshot from "../components/shared/Headshot"

import Dennis from "../images/dennis woodside.jpg"
import Arun from "../images/arun_majumdar.jpg"
import Lidiya from "../images/lidiya-dervisheva.jpeg"
import Seth from "../images/seth.jpg"
import Marisa from "../images/marisa sweeney.jpg"
import Sam from "../images/sam bursten.jpeg"

const Columns = s.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2vw;
`

const Circle = s.a`
    background-color: ${FOREST_GREEN};
    color: white;
    font-family: roboto;
    font-size: 2rem;
    border-radius: 50%;
    width: 13vw;
    height: 13vw;
    text-align: center;
    line-height: 13vw;

    :hover{
        color: white;
    }
`

const LevelItem = s.div.attrs(() => ({
    className: "level-item has-text-centered"
  }))`
    flex-direction: column;
    width: 18vw;
    padding: 0 3vw;
  
    ${mediaMaxWidth("768px")} {
      flex-direction: row;
    }
  `
  
  const Level = s.div`
    margin: 2vw 9vw 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  
    ${mediaMaxWidth("768px")} {
      width: 100%;
      padding: 10%;
    }
  `

const PrizeTitle = s(Text)`
    font-family: roboto;
    font-weight: bold;
    color: ${STEEL_BLUE};
    text-align: center;
    font-size: calc(0.8rem + 1vw);
`

const PrizeSubtitle = s(Text)`
    font-family: roboto;
    font-weight: bold;
    color: ${STEEL_BLUE};
    text-align: center;
    font-size: calc(2.8rem + 1vw);
`

const PrizeText = s(Text)`
    font-family: roboto;
    font-weight: bold;
    text-align: center;
    font-size: 2rem;
    margin: 1vw 0;
`

const WinnersButton = s(Button)`
    background-color: ${GREEN};
    color: white;
    border: none;
    font-size: 2rem;
    text-align: center;
    width: 50vw;
    display: block;
    margin: 2vw auto;

    :hover{
        background-color: ${FOCUS_GREEN};
    }

`

const People = () => (
    <div>
        <Subtitle center>Mentors, Judges, & Speakers</Subtitle>
        <Columns>
            <Headshot 
                imageSrc={Dennis} 
                imageAlt={"Dennis"} 
                name={"Dennis Woodside"} 
                description={<>President <br/> @ Impossible Foods</>}/>
            <Headshot 
                imageSrc={Arun} 
                imageAlt={"Arun"} 
                name={"Dr. Arun Majumdar"} 
                description={<>Founding Director <br/> @ ARPA-E <br/> Former VP of Energy <br/> @ Google</>}/>
            <Headshot 
                imageSrc={Marisa} 
                imageAlt={"Marisa"} 
                name={"Marisa Sweeney"} 
                description={<>Director <br/> @ Generate Capital</>}/>
             <Headshot 
                imageSrc={Lidiya} 
                imageAlt={"Lidiya"} 
                name={"Lidiya Dervisheva"} 
                description={<>Partner <br/> @ Next47</>}/>
            <Circle href="/people">+ more</Circle>
        </Columns>
    </div>
)

const Prizes = () => (
    <div
        css={`border-style: solid;
            border-radius: 50px;
            width: 60vw;
            padding: 3vw;
            display: block;
            margin: 4vw auto 1vw`}>
        <Subtitle center>Prizes</Subtitle>
        <Level>
            <LevelItem>
                <PrizeTitle>First</PrizeTitle>
                <PrizeSubtitle>$500</PrizeSubtitle>
            </LevelItem>
            <LevelItem>
                <PrizeTitle>Second</PrizeTitle>
                <PrizeSubtitle>$400</PrizeSubtitle>
            </LevelItem>
            <LevelItem>
                <PrizeTitle>Third</PrizeTitle>
                <PrizeSubtitle>$300</PrizeSubtitle>
            </LevelItem>
        </Level>
        <PrizeText>Fourth: $200</PrizeText>
        <PrizeText>Honorable Mention: $100</PrizeText>
        <Text fontSize="1.5rem" center>+ Additional funding for continued engagement and development!</Text>
    </div>
)

const Finals = () => (
    <div css={`text-align: center;
                width: 70vw;
                padding: 3vw;
                display: block;
                margin: 1vw auto`}>
        <Text fontSize="2rem" roboto bold>Live Finals, 4/24 at 12 PM EST, <br/> with keynote from</Text>
        <div css={`display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2vw;`}>
            <Headshot 
                imageSrc={Dennis} 
                imageAlt={"Dennis"} 
                name={"Dennis Woodside"} 
                description={"President of Impossible Foods"}/>
        </div>

        <Text fontSize="2rem" roboto bold>and judging by</Text>

        <Columns>
            <Headshot 
                    imageSrc={Lidiya} 
                    imageAlt={"Lidiya Dervisheva"} 
                    name={"Lidiya Dervisheva"} 
                    description={<>Partner <br/> @ Next47</>}/>
            <Headshot 
                imageSrc={Seth} 
                imageAlt={"Seth Bannon"} 
                name={"Seth Bannon"} 
                description={<>Founding Partner <br/> @ Fifty Years</>}/>
            
            <Headshot 
                imageSrc={Marisa} 
                imageAlt={"Marisa Sweeney"} 
                name={"Marisa Sweeney"} 
                description={<>Director <br/> @ Generate Capital</>}/>

            <Headshot 
                imageSrc={Sam} 
                imageAlt={"Sam Bursten"} 
                name={"Sam Bursten"} 
                description={<>Vice President <br/>@ Energy Impact Partners</>}/>
        </Columns>
    </div>
)


const Judging = () => (
    <div>
        <People />
        <Prizes />
        <Finals />
        <WinnersButton href="/Winners2021">View 2021 PCV Prize Winning Pitches</WinnersButton>
        <Subtitle center>Registration Closed for 2021</Subtitle>
    </div>
)

export default Judging