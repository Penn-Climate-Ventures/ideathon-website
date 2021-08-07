import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import { Grid, Cell } from "styled-css-grid";
import "../pages/styles.scss"
import { Title, Text, Subtitle} from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Headshot from "../components/shared/Headshot"

import ArunMajumdar from '../images/arun_majumdar.jpeg'
import DennisWoodside from '../images/dennis woodside.jpg'
import ZhengxiaDou from '../images/zhengxia_dou.jpeg'
import DavdGalligan from '../images/david_galligan.jpeg'
import JamesHagan from '../images/james_hagan.jpeg'
import PeterPsarras from '../images/peter_psarras.jpeg'
import ArthurBenthem from '../images/arthur_benthem.jpeg'
import ESwann from '../images/e_swann.jpg'
import AlexBehar from '../images/alex_behar.jpeg'
import ShuoYang from '../images/shuo_yang.jpeg'
import AllyWarson from '../images/ally_warson.jpeg'
import KimberlyZou from '../images/kimberly_zou.jpeg'
import RyFisher from '../images/ry_fisher.jpeg'
import FranzHochstrasser from '../images/franz_hochstrasser.jpeg'
import CaitlynMcCloskey from '../images/caitlyn_mcCloskey.jpeg'
import BenMay from '../images/ben_may.jpeg'
import AkaashPadmanabha from '../images/akaash_padmanabha.jpeg'
import PEGLogo from '../images/peg.jpeg'
import SSAPLogo from '../images/ssap.png'
import PUCPLogo from '../images/pucp.jpeg'

import AaronRatner from "../images/judges2021/AaronRatner.jpg"
import BrettLasher from "../images/judges2021/BrettLasher.jpg"
import KyleWelborn from "../images/judges2021/KyleWelborn.jpg"
import MackenzieMarcotte from "../images/judges2021/MackenzieMarcotte.jpg"
import SuzanneShaw from "../images/judges2021/SuzanneShaw.jpg"


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

//keynote
const Keynote = () => {
  return (
    <div>
      <Subtitle>Keynote Speakers</Subtitle>
      <Grid columns={2} justifyContent="center">
        <Cell center>
          <Headshot 
                imageSrc={ArunMajumdar} 
                imageAlt="Arun Majumdar"
                name="Arun Majumdar"
                description={<>Jay Precourt Professor of Mechanical Engineering and Photon Science and by courtesy, of Materials Science and Engineering, Stanford University</>}/>
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={DennisWoodside} 
            imageAlt="Dennis Woodside"
            name="Dennis Woodside"
            description="President of Impossible Foods" />
        </Cell>
      </Grid>
    </div>
  )
}

//panelists
const Panelists = () => {
  return (
    <div>
      <Subtitle>Panelists</Subtitle>
      <Grid columns={3} gap= "5px" justifyContent="center">
        <Cell center>
          <Headshot 
            imageSrc={ZhengxiaDou} 
            imageAlt="Dr. Zhengxia Dou"
            name="Dr. Zhengxia Dou"
            description="Professor, Agricultural Systems, University of Pennsylvania School of Veterinary Medicine, Department of Clinical Studies, New Bolton Center" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={DavdGalligan} 
            imageAlt="Dr. David T Galligan"
            name="Dr. David T Galligan"
            description="Professor of Animal Health Economics, University of Pennsylvania, School of Veterinary Medicine" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={JamesHagan} 
            imageAlt="Dr. James R Hagan" 
            name="Dr. James R Hagan" 
            description="Graduate Student Advisor in the Sustainability and Environmental Policy concentrations, Former Vice President of Sustainability & Environment at GlaxoSmithKline"/>
        </Cell>

        <Cell center>
          <Headshot 
            imageSrc={PeterPsarras} 
            imageAlt="Dr. Peter Psarras"
            name="Dr. Peter Psarras"
            description="Research Assistant Professor, Chemical and Biomolecular Engineering" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={ArthurBenthem} 
            imageAlt="Dr. Arthur van Benthem"
            name="Dr. Arthur van Benthem"
            description="Associate Professor of Business Economics and Public Policy" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={ESwann} 
            imageAlt="E. Mitchell Swann"
            name="E. Mitchell Swann"
            description="Managing Director at Resolution Management Consultants, Philadelphia Energy Authority Board" />
        </Cell>
        
        <Cell center>
          <Headshot 
            imageSrc={AlexBehar} 
            imageAlt="Alex Behar"
            name="Alex Behar"
            description="Vice President at Cultivian Sandbox" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={ShuoYang} 
            imageAlt="Shuo Yang"
            name="Shuo Yang"
            description="Principal at Fifty Years" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={AllyWarson} 
            imageAlt="Ally Warson"
            name="Ally Warson"
            description="Senior Associate at UP Partners" />
        </Cell>

        <Cell center>
          <Headshot 
            imageSrc={KimberlyZou} 
            imageAlt="Kimberly Zou" 
            name="Kimberly Zou"
            description="Founder of Climate Tech VC and Analyst at Energy Impact Partners"/>
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={RyFisher} 
            imageAlt="Ry Storey-Fisher"
            name="Ry Storey-Fisher"
            description="Senior Partnership Associate at Powerhouse" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={FranzHochstrasser} 
            imageAlt="Franz Hochstrasser"
            name="Franz Hochstrasser"
            description="CEO and Co-founder of Raise Green and New Haven Community Solar, Former Senior Advisor to the Special Envoy for Climate Change @ the US State Dept" />
        </Cell>
      </Grid>
    </div>
  )
}

//moderators
const Moderators = () => {
  return (
    <div>
      <Subtitle>Moderators</Subtitle>
      <Grid columns={3} gap="20px" justifyContent="center">
        <Cell center>
          <Headshot 
            imageSrc={CaitlynMcCloskey} 
            imageAlt="Caitlyn McCloskey"
            name="Caitlyn McCloskey"
            description={<>Executive member of the <br/> Penn Environmental Group</>} />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={BenMay} 
            imageAlt="Ben May"
            name="Ben May"
            description={<>Founder of ThinkOcean, 
              <br/> 
              Former Co-Chair of SSAP, 
              <br/>
              Former UA Director of Sustainability and Community Impact</>} />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={AkaashPadmanabha} 
            imageAlt="Akaash Padmanabha"
            name="Akaash Padmanabha"
            description="Chair of Penn Dining Advisory Board" />
        </Cell>       
      </Grid>
    </div>
  )
}

//event co-sponsors
const CoSponsors = () => {
  return (
    <div>
      <Subtitle>Event Co-Sponsors</Subtitle>
      <Grid columns={3} justifyContent="center">
        <Cell center>
          <Headshot 
            imageSrc={PEGLogo} 
            imageAlt="Penn Environmental Group"
            name="Penn Environmental Group"
            description="Penn's oldest and largest environmental group, addressing environmental issues and increasing environmental awareness both at a community and global level" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={SSAPLogo} 
            imageAlt="Student Sustainability Association at Penn (SSAP)"
            name="Student Sustainability Association at Penn (SSAP)"
            description="The official umbrella group of environmental sustainability student groups on Penn's campus" />
        </Cell>
        <Cell center>
          <Headshot 
            imageSrc={PUCPLogo} 
            imageAlt="Penn Undergraduate Capital Partners"
            name="Penn Undergraduate Capital Partners"
            description="Student-led organization that is changing the way venture capital interacts with universities in Philadelphia and beyond." />
        </Cell>
      </Grid>
    </div>
  )
}

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
      <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize" defer={false}>
        <Title>People</Title>
        <meta charSet="utf-8" />
        <link rel="canonical" href={"https://www.prize.pennclimateventures.org/people"} />
        <meta name="description" content="Penn Climate Ventures official prize people." />
      </Helmet>
      <Navbar />
      <div css={`padding: 6vw 12vw;`}>
        <Title>People</Title>
        <Judges />
        <Text>More to be announced soon!</Text>
        <PCVTeam />
        {/* <Keynote/>
        <br />
        <Panelists/>
        <br />
        <Moderators/>
        <br />
        <CoSponsors/>
        <br />
        <PCVTeam/> */}
      </div>
      <Footer />
    </>
  )
}

export default People;