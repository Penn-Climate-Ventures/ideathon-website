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

const Description = s.div`
  padding: 0 40px;
`
const Schedule = s.div`
  border-left: 0.3rem solid ${GREEN}; 
  margin: 2vw auto;
  width: fit-content;
`

const TimelineLayout = React.forwardRef(({ className }, ref) => (
  <div ref={ref}>
    <Description>
      <Subtitle fontSize="1.8rem" center css={`padding: 5px 0;`}>Dive into the most pressing environmental issues of today.</Subtitle>
      <Text fontSize="1.3rem" roboto bold center>Kickstart a climate startup in three weeks, supported by a world-class network of mentors.</Text>
    </Description>

    <Schedule>
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
    </Schedule>

    <Link 
      css={`
        text-align: center;
        font-family: roboto;
        margin: 0 auto;
        display: block;
      `}
      bold 
      fontSize="1.5rem"
      href="/schedule">
        Full Event Schedule
    </Link>
  </div>
))

export const Timeline = s(TimelineLayout)`
  margin: 10vw auto;
`