import React from "react"
import s from "styled-components"
import { Title, Subtitle, Text } from "./shared/Typography"
import { LIGHT_BLUE, mediaMaxWidth } from "../utils/constants"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-centered"
}))`
  flex-direction: column;
  width: 18vw;
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
    font-family: lato;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
`

const PrizeSubtitle = s(Text)`
    font-family: lato;
    font-weight: bold;
    text-align: center;
    font-size: 3rem;
`

const PrizeText = s(Text)`
    font-family: lato;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
    margin: 10px 0;
`

const Prizes = () => (
  <div
      css={`border-style: solid;
          border-radius: 50px;
          width: 60vw;
          padding: 3vw;
          display: block;
          margin: 4vw auto 1vw`}>
      <Subtitle center css={`padding-bottom: 10px`}>Prizes</Subtitle>
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
      <PrizeText>Fifth: $100</PrizeText>
      {/* <Text fontSize="1.5rem" center>+ Additional funding for continued engagement and development!</Text> */}
  </div>
)

export default Prizes
