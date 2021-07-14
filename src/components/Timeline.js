import React from "react"
import s from "styled-components"
import { Subtitle, Text, Link } from "./shared/Typography"
import { mediaMaxWidth, STEEL_BLUE, GREEN } from "../utils/constants"
import Button from "../components/shared/Button"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-centered"
}))`
  flex-direction: column;
  width: 25vw;
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
    font-size: 2rem;
  }
`

const WeekTitle = s(Subtitle)`
  color: ${STEEL_BLUE};
  ${responsiveText}
  ${mediaMaxWidth("768px")} {
    margin-right: auto;
  }
`

const WeekSubtitle = s(Subtitle)`
  font-size: 1.3rem;
  margin: 3vw 0 1vw;
`

const List = s.ul`
  font-family: avenir;
  font-size: 1.2rem;
  list-style-type: disc;
  text-align: left;
  margin-bottom: 1vw;
`

const Date = s(Text)`
  font-weight: bold;
  font-family: roboto;
  font-size: 1.4rem;
  margin: 10px 20px;
  display: inline-block;
  text-align: left;
`

const EventGroup = s.div`
  display: flex;
  border-left: 0.3rem solid ${GREEN};
  flex-wrap: wrap;
  margin: 1vw 2vw;        
`

const EventText = s(Text)`
  font-size: 1.4rem;
  margin-left: 40px;
  display: inline-block;
  text-align: left;
`

const TimelineLayout = React.forwardRef(({ className }, ref) => (
  <div ref={ref}>
    <Subtitle fontSize="1.8rem" center css="padding: 2vw 0 0;">Dive into the most pressing environmental issues of today.</Subtitle>
    <Text fontSize="1.3rem" roboto bold center>Kickstart a climate startup in three weeks, supported by a world-class network of mentors.</Text>
    
    <div 
      css={`
        border-left: 0.3rem solid ${GREEN}; 
        margin: 2vw auto;
        width: 40vw;`}>
      <Date>SEPT 21</Date>
      <EventText>Opening keynote</EventText>
      <br/>
      <Date>SEPT 22</Date>
      <EventText>Registration deadline</EventText>
      <br/>
      <Date>SEPT 23</Date>
      <EventText>Climate</EventText>
      <br/>
      <Date>SEPT 24</Date>
      <EventText>Pitches + judging</EventText>
      <br/>
      <Date>SEPT 25</Date>
      <EventText>Closing keynote + winners announced</EventText>
    </div>

    <Button href="/schedule" css={`margin: 0 40%;`}>Full Event Schedule</Button>
  </div>
))

export const Timeline = s(TimelineLayout)`
  margin: 10vw auto;
`