import React from "react"
import s from "styled-components"
import {Title, Subtitle, Text} from "./shared/Typography"
import Button from "./shared/Button"
import Chevron from "../images/svg/chevron.svg"

const HeroSubtitle = s(Subtitle)`
  all: unset;
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
`

const InlineBlock = s.div`
  text-align: left;
  display: inline-block;
  padding: 0 50px;
`

const HeroLayout = ({ className, scrollTo }) => (
  <div className={`container has-text-centered ${className}`}>
    <InlineBlock>
      <Title fontSize="4rem">Penn Climate Ventures Ideathon</Title>
      <HeroSubtitle>
        catalyzing climate action
      </HeroSubtitle>
    </InlineBlock>
    <br />
    <Button
      css={`display: block; 
            margin: 50px auto;`}
      href="https://airtable.com/shrBgu8tXTCMw8Ydk"
      target="_blank" rel="noopener noreferrer">
      Registration extended to October 16th
    </Button>

    <div className={"container"}>
      <Text center><i>
        Due to unanticipated delays, we are extending the submission deadline to the last week of
        October and postponing office hours to the last two weeks of October. More details will come
        in the second week of October.
      </i></Text>
    </div>

    <br/> <br/> <br/>
    <a>
      <Chevron onClick={scrollTo} css={`
        width: 3rem;
        margin-top: 10px;
      `} />
    </a>
  </div>
)

export const Hero = s(HeroLayout)`
  margin: 130px auto;
`
