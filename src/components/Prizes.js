import React from "react"
import s from "styled-components"
import { Title, Subtitle, Text } from "./shared/Typography"
import { STEEL_BLUE, mediaMaxWidth } from "../utils/constants"

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

const responsiveText = `
  ${mediaMaxWidth("768px")} {
    font-size: calc(2rem + 1vw);
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

export default Prizes
