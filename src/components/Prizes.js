import React from "react"
import s from "styled-components"
import { Subtitle, Text } from "./shared/Typography"
import { mediaMaxWidth } from "../utils/constants"
import Button from "./shared/Button"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-centered"
}))`
  flex-direction: column;
  width: 50px;
  margin: 0 auto;
`

const Level = s.div`
    margin: 5px auto;
    display: flex;
    justify-content: center;
  
    ${mediaMaxWidth("768px")} {
      width: 100%;
      padding: 5%;
      flex-direction: column;
    }
`

const PrizeTitle = s(Text)`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
`

const PrizeSubtitle = s(Text)`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 3rem;
`

const PrizeText = s(Text)`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
    margin: 10px 0;
`

const PrizeContainer = s.div`
    border-style: solid;
    border-radius: 50px;
    width: 60%;
    padding: 20px;
    display: block;
    margin: 40px auto 10px;

    ${mediaMaxWidth("768px")} {
        width: 70%;
    }
`

const PrizeAmount = () => (
    <PrizeContainer>
        <Subtitle center css={`padding-bottom: 10px`}>Prizes</Subtitle>
        <Level>
            <LevelItem>
                <PrizeTitle>1st</PrizeTitle>
                <PrizeSubtitle>$500</PrizeSubtitle>
            </LevelItem>
            <LevelItem>
                <PrizeTitle>2nd</PrizeTitle>
                <PrizeSubtitle>$400</PrizeSubtitle>
            </LevelItem>
            <LevelItem>
                <PrizeTitle>3rd</PrizeTitle>
                <PrizeSubtitle>$300</PrizeSubtitle>
            </LevelItem>
        </Level>
        <PrizeText>4th: $200</PrizeText>
        <PrizeText>5th: $100</PrizeText>
        <Text fontSize="1.5rem" center>+ Additional funding for continued engagement and development!</Text>
  </PrizeContainer>
)

const Prizes = () => (
    <div>
        <PrizeAmount/>
        <Button href="/people" css={`margin: 40px auto; display: block`}>Meet Our Judges</Button>
    </div>
)

export default Prizes
