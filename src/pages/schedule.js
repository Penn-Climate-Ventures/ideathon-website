import React from "react"
import Helmet from "react-helmet"
import { Navbar, Footer} from "../components"
import s from "styled-components"
import { Title, Text, Link } from "../components/shared/Typography"
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
  <div css={`margin-top: 30px;`}>
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
        <Text>
          Life Cycle Assessment Workshop
          <br/>
          <i>
            Register <Link href="https://airtable.com/shrylRB4E9v7mqKtq" target="_blank">here</Link>
          </i>
        </Text>
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
        <Text>Office Hours with Jack Policar</Text>
        <EventTime>6:00 PM to 8:00 PM</EventTime>
      </Event>
      <Event>
        <Text>Opening Keynote + Submissions Q&As</Text>
        <EventTime>9:00 PM</EventTime>
      </Event>
    </EventGroup>

    <Date>Tuesday, Sept. 21</Date>
    <EventGroup>
      <Event>
        <Text>Office Hours with Cynthia Wang</Text>
        <EventTime>9:00 AM to 10:00 AM</EventTime>
      </Event>
      <Event>
        <Text>Office Hours with Ted Netland</Text>
        <EventTime>4:00 PM to 6:00 PM</EventTime>
      </Event>
    </EventGroup>

    <Date>Wednesday, Sept. 22</Date>
    <EventGroup>
      <Event>
        <Text>Office Hours with Josh Moser</Text>
        <EventTime>3:00 PM to 5:00 PM</EventTime>
      </Event>
    </EventGroup>

    <Date>Thursday, Sept. 23</Date>
    <EventGroup>
      <Event>
        <Text>Office Hours with Amber Luong</Text>
        <EventTime>2:00 PM to 4:00 PM</EventTime>
      </Event>
    </EventGroup>

    <Date>Friday, Sept. 24</Date>
    <EventGroup>
      <Event>
        <Text>Registration Deadline</Text>
        <EventTime>12:00 AM</EventTime>
      </Event>
      <Event>
        <Text>Submissions Due</Text>
        <EventTime>4:00 AM</EventTime>
      </Event>
      <Event>
        <Text>
          Judging Period
          <br/>
          <i>See our judges <a href="/people#judges">here</a></i>
          <br/>
          <i>Preview the rubric <a href="/rules/rubric">here</a></i>
        </Text>
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
      <br/>
      <Text center><i>Registration has been extended to Sept. 24 at 12:00 AM.</i></Text>
      <br/>
      <Timeline />
    </div>
    <Footer />
  </>
)

export default Schedule
