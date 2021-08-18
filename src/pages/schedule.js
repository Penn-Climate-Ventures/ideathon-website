import React from "react"
import Helmet from "react-helmet"
import { Navbar, Footer} from "../components"
import s from "styled-components"
import { Title, Text } from "../components/shared/Typography"
import { LIGHT_BLUE } from "../utils/constants";

const Date = s.h3`
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px;
`

const EventGroup = s.div`
    border-left: 3px solid ${LIGHT_BLUE};
    margin-bottom: 30px;
    padding-left: 20px;
`

const Event = s.div`
  padding: 2px 0;
`

const EventTime = s(Text)`
  color: ${LIGHT_BLUE};
`

const Timeline = () => (
  <div>
    <Date>Tuesday, Sept. 9</Date>
    <EventGroup>
      <Event>
        <Text>Registration Opens & Challenge Prompts Released</Text>
        <EventTime>12:00 AM</EventTime>
      </Event>
    </EventGroup>
    <Date>Friday, Sept. 17</Date>
    <EventGroup>
      <Event>
        <Text>Life Cycle Assessment Workshop</Text>
        <EventTime>5:00 PM</EventTime>
      </Event>
      <Event>
        <Text>Team Formation / Networking Event</Text>
        <EventTime>6:30 PM</EventTime>
      </Event>
    </EventGroup>
    <Date>Monday, Sept. 20</Date>
    <EventGroup>
      <Event>
        <Text>Opening Keynote + Submissions Q&As</Text>
        <EventTime>9:00 PM</EventTime>
      </Event>
      <Event>
        <Text>Registration Deadline</Text>
        <EventTime>11:59 PM</EventTime>
      </Event>
    </EventGroup>
    <Date>Monday, Sept. 21 — Friday, Sept. 24</Date>
    <EventGroup>
      <Event>
        <Text>One-to-One Mentor Office Hours & Pitch Feedback Office Hours</Text>
      </Event>
    </EventGroup>
    <Date>Friday, Sept. 24</Date>
    <EventGroup>
      <Event>
        <Text>Submissions Due</Text>
        <EventTime>4:00 AM</EventTime>
      </Event>
      <Event>
        <Text>Judging Period</Text>
        <EventTime>2:00 PM to 8:00 PM</EventTime>
      </Event>
    </EventGroup>
    <Date>Saturday, Sept. 25</Date>
    <EventGroup>
      <Event>
        <Text>Closing Ceremony + Winners Announced!</Text>
      </Event>
    </EventGroup>
  </div>
)

const Schedule = () => (
  <>
    <Helmet defaultTitle="PCV Ideathon" titleTemplate="%s | PCV Ideathon">
      <title defer={false}>Schedule</title>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://www.ideathon.pennclimateventures.org/schedule" />
      <meta name="description" content="Penn Climate Ventures official schedule."/>
    </Helmet>
    <Navbar />
    <div css={`padding: 60px 12vw;`}>
      <Title>PCV Ideathon Fall 2021 Schedule</Title>
      <Text center css={`margin: 60px auto;`}>
        <i>More details will be released in September! All times Eastern Standard.</i>
      </Text>
      <Timeline />
    </div>
    <Footer />
  </>
)

export default Schedule
