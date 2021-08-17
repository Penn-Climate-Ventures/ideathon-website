import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "../pages/styles.scss"
import { Title, Text, Subtitle} from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Headshot from "../components/shared/Headshot"
import { mediaMaxWidth } from "../utils/constants"

import AaronRatner from "../images/2021/judges/AaronRatner.jpg"
import BrettLasher from "../images/2021/judges/BrettLasher.jpg"
import KyleWelborn from "../images/2021/judges/KyleWelborn.jpg"
import MackenzieMarcotte from "../images/2021/judges/MackenzieMarcotte.jpg"
import SuzanneShaw from "../images/2021/judges/SuzanneShaw.jpg"
import MatthewCohen from "../images/2021/judges/MatthewCohen.jpg"
import LaurenHartle from "../images/2021/judges/LaurenHartle.jpg"

import AmberLuong from "../images/2021/mentors/AmberLuong.jpg"
import JackPolicar from "../images/2021/mentors/JackPolicar.jpg"
import TedNetland from "../images/2021/mentors/TedNetland.jpg"

const GridLayout = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const PersonLayout = s.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 0;

  ${mediaMaxWidth("900px")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Person = ({imageSrc, imageAlt, name, linkedIn, title, bio}) => (
  <PersonLayout>
    <Headshot
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      name={name}
      linkedIn={linkedIn}/>
    <div css={`margin-top: 15px`}>
      <Text bold css={`margin-bottom: 10px`}>{title}</Text>
      <Text>{bio}</Text>
    </div>
  </PersonLayout>
)

const Judges = () => (
  <div>
    <Subtitle>Judges</Subtitle>
    <GridLayout>
      <Person 
        imageSrc={AaronRatner}
        imageAlt="Aaron Ratner"
        name="Aaron Ratner"
        linkedIn="https://www.linkedin.com/in/aarontratner/"
        title={<>President of Cross River Infrastructure Partners,
          <br/>
          ClimateTech Venture Partner with Vectr Ventures</>}
        bio="Aaron is the President of Cross River Infrastructure Partners, a platform of development companies deploying climate technologies into sustainable infrastructure projects across carbon capture, sustainable protein, clean fuels and clean energy, with a focus on first and early commercial projects. Aaron is also the ClimateTech Venture Partner with Vectr Ventures, a Hong Kong-based venture capital investment firm, where he focuses on carbon utilization and transformation and alternative protein."/>

      <Person 
        imageSrc={BrettLasher}
        imageAlt="Brett Lasher"
        name="Brett Lasher"
        linkedIn="https://www.linkedin.com/in/brett-lasher-0b8256/"
        title="Executive Director of Cox Communications’ New Growth & Development group"
        bio="Brett Lasher is an innovation leader who heads innovation in the Energy vertical for Cox Communications’ New Growth & Development (NG&D) group.  In this role, he is responsible for ideating around new opportunities (both B2B and B2C) in electricity, water, gas and oil and then working to de-risk and commercialize these initiatives. He is very active in the Atlanta entrepreneurial community having served as a mentor on multiple occasions in both the TechStars and Boomtown accelerators.  In addition to his work at Cox, Brett currently serves as an advisor to nVenue (AI/ML data analytics company for sports content) and as a Limited Partner Ambassador for Energy Impact Partners helping to evaluate investment theses and start-up companies in the Energy space."/>

      <Person 
        imageSrc={KyleWelborn}
        imageAlt="Kyle Welborn"
        name="Kyle Welborn"
        linkedIn="https://www.linkedin.com/in/kylewelborn/"
        title="Co-founder and General Partner at Cultivation Capital"
        bio="Kyle is a co-founder and General Partner at Cultivation Capital, an early stage focused venture capital firm. He focuses on making investments across food and agriculture."/>

      <Person 
        imageSrc={LaurenHartle}
        imageAlt="Lauren Hartle"
        name="Lauren Hartle"
        linkedIn="https://www.linkedin.com/in/laurenhartle/"
        title="Associate at Prime Impact Fund"
        bio="Dr. Lauren Hartle is an Associate at Prime Impact Fund, with responsibility to source investment opportunities broadly, manage the Fund’s investment pipeline, and support investment diligence. Lauren’s professional background includes basic and applied R&D, spanning academic and start-up settings, as well as venture investing."/>

      <Person 
        imageSrc={MackenzieMarcotte}
        imageAlt="Mackenzie Marcotte"
        name="Mackenzie Marcotte"
        linkedIn="https://www.linkedin.com/in/mackenzie-marcotte-a457546b/"
        title="Analyst at EcoAct"
        bio="Mackenzie Marcotte is an analyst with EcoAct North America’s Advisory team. Prior to joining EcoAct in 2021, she held a variety of sustainability consulting roles with nonprofits, large corporations, and industry coalitions in the natural foods, clean energy, and telecom sectors. She is a graduate of the University of Pennsylvania (Master of Environmental Studies, Corporate Sustainability & Food Systems), MINES ParisTech in France (Master of International Environmental Management), and Boston University (Bachelor of Arts, Political Science). She’s currently based in New York."/>

      <Person 
        imageSrc={MatthewCohen}
        imageAlt="Matthew Cohen"
        name="Matthew Cohen"
        linkedIn="https://www.linkedin.com/in/matthew-cohen-bb246532/"
        title="Director of Technology at Pangaea Ventures Ltd."
        bio="Matt joined Pangaea Ventures in 2012. Prior to joining Pangaea Ventures, Matt was part of a start-up in printed electronics utilizing nanotechnology and has experience with companies in biotechnology and environmental bioremediation. He performed various functions ranging from R&D to business development to devising international launch strategies while gaining valuable start-up understanding. He works closely with TruTag Technologies and is on the NREL Investor Advisory Board. Matt holds an MPhil in Micro- & Nanotechnology Enterprise from the University of Cambridge and graduated summa cum laude from the University of Pennsylvania with a BSE in Materials Science & Engineering."/>

      <Person 
        imageSrc={SuzanneShaw}
        imageAlt="Suzanne Shaw"
        name="Suzanne Shaw"
        linkedIn="www.linkedin.com/in/suzannemshaw"
        title="Investment Operations at Asian Infrastructure Investment Bank"
        bio="15 years’ international experience, focused on integrating sustainability and climate resilience with profitability in energy and infrastructure related investments"/>
    </GridLayout>
  </div>
)

const Mentors = () => (
  <div>
    <Subtitle>Mentors</Subtitle>
    <GridLayout>
      <Person 
        imageSrc={AmberLuong}
        imageAlt="Amber Luong"
        name="Amber Luong"
        linkedIn="https://www.linkedin.com/in/ambercluong/"
        title="Head of Partnerships at Blue Sky Analytics"
        bio="Amber is currently the Head of Partnerships for Blue Sky Analytics. She has over 15 years of experience across the financial sector, policy, international development, and a range of climate change mitigation and adaptation efforts."/>

      <Person 
        imageSrc={JackPolicar}
        imageAlt="Jack Policar"
        name="Jack Policar"
        linkedIn="https://www.linkedin.com/in/jack-policar/"
        title="COO of Phood"
        bio="Jack Policar is a Denver - NY based entrepreneur. He is currently the COO of Phood, a startup that allows college students to use dining dollars to order from DoorDash with free delivery (you can find more information at Phood.co) Outside of Phood, Jack teaches an entrepreneurship course, mentors a number of early-stage college student lead startups and is building a virtual sustainability community. "/>

      <Person 
        imageSrc={TedNetland}
        imageAlt="Ted Netland"
        name="Ted Netland"
        linkedIn="https://www.linkedin.com/in/ted-netland/"
        title="Director of Business Development & New Ventures at Lever Advisers"
        bio="Ted Netland is the Director of New Ventures at a venture studio co-managed by the head of a prominent alt protein venture capital firm. He holds an MBA from MIT Sloan and was previously a senior associate at Cambridge Associates. "/>
    </GridLayout>
  </div>
)

const People = () => {
  return (
    <>
      <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize" defer={false}>
        <Title>People</Title>
        <meta charSet="utf-8" />
        <link rel="canonical" href={"https://www.prize.pennclimateventures.org/people"} />
        <meta name="description" content="Penn Climate Ventures official prize people." />
      </Helmet>
      <Navbar />
      <div css={`padding: 60px 12vw;`}>
        <Title>People</Title>
        <Judges/>
        <Mentors/>
      </div>
      <Footer />
    </>
  )
}

export default People;