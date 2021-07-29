import React from "react"
import s from "styled-components"
import { Subtitle, Text, Link } from "./shared/Typography"
import { mediaMaxWidth, STEEL_BLUE, GREEN } from "../utils/constants"
import Button from "./shared/Button"

const Date = s(Text)`
  font-weight: bold;
  font-family: roboto;
  font-size: 1.4rem;
  flex-basis: content;
`

const EventText = s(Text)`
  font-size: 1.4rem;
  margin-left: 40px;

  ${mediaMaxWidth("1000px")} {
    margin-left: 0;
  }
`

const EventGroup = s.span`
  margin: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${mediaMaxWidth("1000px")} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const TimelineLayout = React.forwardRef(({ className }, ref) => (
  <div ref={ref}>
    <Subtitle fontSize="1.8rem" center css={`padding: 2vw 0 0;`}>Dive into the most pressing environmental issues of today.</Subtitle>
    <Text fontSize="1.3rem" roboto bold center>Kickstart a climate startup in three weeks, supported by a world-class network of mentors.</Text>
    
    <div 
      css={`
        border-left: 0.3rem solid ${GREEN}; 
        margin: 2vw auto;
        width: 40vw;`}>
      <EventGroup>
        <Date>SEPT 21</Date>
        <EventText>Opening keynote</EventText>
      </EventGroup>

      <EventGroup>
        <Date>SEPT 22</Date>
        <EventText>Registration deadline</EventText>
      </EventGroup>

      <EventGroup>
        <Date>SEPT 23</Date>
        <EventText>Climate</EventText>
      </EventGroup>

      <EventGroup>
        <Date>SEPT 24</Date>
        <EventText>Pitches + judging</EventText>
      </EventGroup>

      <EventGroup>
        <Date>SEPT 25</Date>
        <EventText>Closing keynote + winners announced</EventText>
      </EventGroup>
    </div>

    <Button href="/schedule" 
      css={`margin: 0 40%;`}>Full Event Schedule</Button>
  </div>
))

export const Timeline = s(TimelineLayout)`
  margin: 10vw auto;
`