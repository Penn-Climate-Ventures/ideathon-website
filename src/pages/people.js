import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "../pages/styles.scss"
import { Title, Text, Subtitle} from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Headshot from "../components/shared/Headshot"

import AaronRatner from "../images/2021/judges/AaronRatner.jpg"
import BrettLasher from "../images/2021/judges/BrettLasher.jpg"
import KyleWelborn from "../images/2021/judges/KyleWelborn.jpg"
import MackenzieMarcotte from "../images/2021/judges/MackenzieMarcotte.jpg"
import SuzanneShaw from "../images/2021/judges/SuzanneShaw.jpg"

const GridLayout = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Judges = () => (
  <div>
    <Subtitle>Judges</Subtitle>
    <GridLayout>
      <Headshot 
        imageSrc={AaronRatner}
        imageAlt="Aaron Ratner"
        name="Aaron Ratner"
        description={<>President of Cross River <br/> Infrastructure Partners,
          <br/>
          ClimateTech Venture Partner with <br/> Vectr Ventures</>}
        linkedIn="https://www.linkedin.com/in/aarontratner/"/>

      <Headshot 
        imageSrc={BrettLasher}
        imageAlt="Brett Lasher"
        name="Brett Lasher"
        description={<>Executive Director of Cox Communications’ New Growth & Development group, 
          <br/>
          Advisor to nVenue,
          <br/>
          Limited Partner Ambassador for Energy Impact Partners</>}
        linkedIn="https://www.linkedin.com/in/brett-lasher-0b8256/"/>

      <Headshot 
        imageSrc={KyleWelborn}
        imageAlt="Kyle Welborn"
        name="Kyle Welborn"
        description="Co-founder and General Partner at Cultivation Capital"
        linkedIn="https://www.linkedin.com/in/kylewelborn/"/>

      <Headshot 
        imageSrc={MackenzieMarcotte}
        imageAlt="Mackenzie Marcotte"
        name="Mackenzie Marcotte"
        description="Analyst at EcoAct"
        linkedIn="https://www.linkedin.com/in/mackenzie-marcotte-a457546b/"/>

      <Headshot 
        imageSrc={SuzanneShaw}
        imageAlt="Suzanne Shaw"
        name="Suzanne Shaw"
        description="Investment Operations at Asian Infrastructure Investment Bank"
        linkedIn="www.linkedin.com/in/suzannemshaw"/>
    </GridLayout>
  </div>
)

//PCV team, advisors, and other core members
const PCVTeam = () => {
  return (
    <div css={`padding: 15px 0`}>
      <Subtitle>PCV Prize Team</Subtitle>
      <Text>
        Yi-An Hsieh - Prize Lead <br/>
        Omar Ben Kaddour - Outreach <br />
        Christiana Guan - Marketing <br />
        Anjie Wang - Events <br />
        Aditya Rao - Events <br />
        Alice Feng - Fundraising <br />
        Nicole Chau - Web Dev + Design <br />
        Ryoma Harris - Web Dev
      </Text>
    </div>
  )
}

const People = () => {
  return (
    <>
      <Helmet defaultTitle="PCV Ideathon" titleTemplate="%s | PCV Ideathon" defer={false}>
        <Title>People</Title>
        <meta charSet="utf-8" />
        <link rel="canonical" href={"https://www.ideathon.pennclimateventures.org/people"} />
        <meta name="description" content="Penn Climate Ventures official prize people." />
      </Helmet>
      <Navbar />
      <div css={`padding: 90px 12vw;`}>
        <Title>People</Title>
        <Judges />
        <Text>More to be announced soon!</Text>
        <PCVTeam />
      </div>
      <Footer />
    </>
  )
}

export default People;