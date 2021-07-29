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
    <div>
      <Subtitle>PCV Team</Subtitle>
      <Text>
        Andrew Yu - Management <br />
        Mark Wasuwanich - Management <br />
        Aliris Tang - Management <br />
        Marina Dauer - Prize Lead <br />
        Shalini Majumdar - Fellowships Lead <br />
        Angela Sun - Events Coordinator <br />
        Yi-An Hsieh - Events Coordinator, Design <br />
        Nicole Chau - Design
      </Text>
      <br />
      <Subtitle>PCV Advisors</Subtitle>
      <Text>
        Clara Lyle - Weitzman School of Design, MA Environmental Planning <br />
        Helen Wiley - Wharton Risk Center <br />
        Ben Thomas - Wharton Risk Center <br />
      </Text>
      <br />
      <Subtitle>SparkTeen Team</Subtitle>
      <Text>
        Kyler Wang<br />
        Kai Fine<br />
        Angel More <br />
        Andrew Gao<br />
        Jodi Sy<br />
        Aiko Ma<br />
        Sumner Rahr<br />
        Kevin Wang<br />
        Rayan Garg <br />
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
        <Title>People (2021)</Title>
        <Keynote/>
        <br />
        <Panelists/>
        <br />
        <Moderators/>
        <br />
        <CoSponsors/>
        <br />
        <PCVTeam/>
      </div>
      <Footer />
    </>
  )
}

export default People;