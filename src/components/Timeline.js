import React from "react"
import s from "styled-components"
import { Text, Link } from "./shared/Typography"
import { mediaMaxWidth, LIGHT_BLUE } from "../utils/constants"
import Button from "./shared/Button"


const Date = s(Text)`
  font-weight: bold;
  font-size: 1.5rem;
  flex-basis: content;
  letter-spacing: 5px;
`

const EventText = s(Text)`
  font-size: 1.5rem;
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
  border-left: 0.3rem solid ${LIGHT_BLUE}; 
  margin: 2vw auto;
  width: fit-content;
`

const TimelineLayout = React.forwardRef(({ className }, ref) => (
  <div ref={ref}>
    <Description>
      <Text fontSize="1.5rem" center bold css={`padding: 5px 0;`}>
        Dive into the most pressing environmental issues of today.
        <br/>
        View this year's challenge prompts here:
      </Text>
      <Button href="/rules/prompts" css={`margin: 15px auto 40px; display: block`}>Challenge Prompts</Button>
    </Description>

    <div style={{marginTop: 90 + 'px', marginBottom: 90 + 'px'}}>
      <Schedule>
        <EventGroup>
          <Date>SEPT 9 &nbsp;</Date>
          <EventText>Registration opens</EventText>
        </EventGroup>

        <EventGroup>
          <Date>SEPT 17</Date>
          <EventText>Life cycle assessment workshop</EventText>
        </EventGroup>

        <EventGroup>
          <Date>SEPT 20</Date>
          <EventText>Opening keynote</EventText>
        </EventGroup>

        <EventGroup>
          <Date>OCT 26</Date>
          <EventText>Submissions due</EventText>
        </EventGroup>

        <EventGroup>
          <Date>OCT 29</Date>
          <EventText>Closing ceremony + winners announced @ ARCH 208, 7PM - 8PM</EventText>
        </EventGroup>
      </Schedule>

      <Text center><i>To see the full schedule, click <Link href={"/schedule"}>here</Link>.</i></Text>
    </div>

    {/*<Button href="/schedule" css={`margin: 40px auto; display: block`}>Full Event Schedule</Button>*/}
  </div>
))

export const Timeline = s(TimelineLayout)`
  margin: 10vw auto;
`
