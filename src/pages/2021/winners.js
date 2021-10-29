import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "../../pages/styles.scss"
import { Title, Text, Subtitle, Link } from "../../components/shared/Typography"
import { Navbar, Footer } from "../../components"
import { LIGHT_BLUE } from "../../utils/constants"

import Cattlyze from "../../images/2021/pitchdecks/Cattlyze.pdf"
import Economicalgae from "../../images/2021/pitchdecks/Economicalgae.pdf"
import NathanChenPitch from "../../images/2021/pitchdecks/NathanChen.pdf"
import Nusantara from "../../images/2021/pitchdecks/Nusantara.pdf"
import Pluck from "../../images/2021/pitchdecks/Pluck.pdf"

import AdamShi from "../../images/2021/winners/AdamShi.jpg"
import AshwinBalaji from "../../images/2021/winners/AshwinBalaji.jpg"
import DanielTao from "../../images/2021/winners/DanielTao.jpg"
import FauziaRahmah from "../../images/2021/winners/FauziaRahmah.jpg"
import FirdausaAmilia from "../../images/2021/winners/FirdausaAmilia.jpg"
import GraceDai from "../../images/2021/winners/GraceDai.jpg"
import JosiahSyefatiawan from "../../images/2021/winners/JosiahSyefatiawan.jpg"
import KrystalLi from "../../images/2021/winners/KrystalLi.jpg"
import LindaWu from "../../images/2021/winners/LindaWu.jpg"
import NailahShabirah from "../../images/2021/winners/NailahShabirah.jpg"
import NathanChen from "../../images/2021/winners/NathanChen.jpg"

export const winners = [
  {
    placementText: "1st Place",
    teamName: "Nathan Chen",
    pitchDeck: NathanChenPitch,
    solutionDescription: "Biodegradable IoT moisture sensors can give us large quantities of data, allowing us to make better decisions on when/where to water crops.",
    teamMembers: [
      {
        name: "Nathan Chen",
        picture: NathanChen,
        linkedin: "https://www.linkedin.com/in/nathanjchen"
      }
    ],
  },
  {
    placementText: "2nd Place",
    teamName: "Nusantara",
    pitchDeck: Nusantara,
    solutionDescription: "Highly-efficient, Vaseline-based, Solar Panel Cooling System",
    teamMembers: [
      {
        name: "Nailah Shabirah",
        picture: NailahShabirah,
        linkedin: "https://www.linkedin.com/in/nailahes/"
      },
      {
        name: "Josiah Syefatiawan",
        picture: JosiahSyefatiawan,
        linkedin: "https://www.linkedin.com/in/josiah-enrico-syefatiawan-761863192/"
      },
      {
        name: "Fauzia Rahmah",
        picture: FauziaRahmah,
        linkedin: "https://www.linkedin.com/in/fauzia-rahmah-528738175/"
      },
      {
        name: "Firdausa Amilia",
        picture: FirdausaAmilia,
        linkedin: "https://www.linkedin.com/in/firdausaamilia/"
      }
    ],
  },
  {
    placementText: "3rd Place",
    teamName: "Cattalyze",
    pitchDeck: Cattlyze,
    solutionDescription: "A platform that empowers and enables growers to implement carbon-offsetting feed management practices and generate revenue through blockchain.",
    teamMembers: [
      {
        name: "Grace Dai",
        picture: GraceDai,
        linkedin: "https://www.linkedin.com/in/grace-dai-8a1429179"
      },
      {
        name: "Adam Shi",
        picture: AdamShi,
        linkedin: "http://linkedin.com/in/adam-shi-a10311182"
      },
      {
        name: "Ashwin Balaji",
        picture: AshwinBalaji,
        linkedin: "https://www.linkedin.com/in/ashwin-balaji-159ba4218"
      },
      {
        name: "Linda Wu",
        picture: LindaWu,
        linkedin: ""
      }
    ],
  },
  {
    placementText: "4th Place",
    teamName: "Pluck",
    pitchDeck: Pluck,
    solutionDescription: "Pluck is a software platform for businesses to redirect their excess food to consumers before it becomes food waste.",
    teamMembers: [
      {
        name: "Daniel Tao",
        picture: DanielTao,
        linkedin: "https://www.linkedin.com/in/xdtao/"
      }
    ],
  },
  {
    placementText: "5th Place",
    teamName: "Economicalgae",
    pitchDeck: Economicalgae,
    solutionDescription: "To meet the growing demand for fuels, algae biofuels can be made a reality by streamlining and circularizing the algae biofuel production process via multi-outputs.",
    teamMembers: [
      {
        name: "Krystal Li",
        picture: KrystalLi,
        linkedin: "http://linkedin.com/in/krystal-li-144583205"
      },
      {
        name: "Kayla Patel",
        picture: "",
        linkedin: "http://linkedin.com/in/kayla-patel-2025"
      }
    ],
  },
]

const WinnerDiv = s.div`
  margin: 30px auto 60px auto;
`

const WinnerHeader = s.h2`
  font-weight: bold;
  font-size: 2.5rem;
`

const PitchDeck = s.iframe`
  display: block;
  margin: 15px auto;
  width: 90%;
  height: 500px;
`

const ImageSize = `200px`;

const TeamMembers = s.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  justify-content: center;
`

const Member = s.figure`
  margin-left: auto;
  margin-right: auto;
`

const Headshot = s.img`
  width: ${ImageSize};
  height: ${ImageSize};
  border-radius: 5px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`

const Name = s.figcaption`
  color: ${LIGHT_BLUE};
  text-align: center;
  font-weight: bold;
`

const Winners2021 = () => {
  return (
    <>
      <Helmet defaultTitle="PCV Ideathon" titleTemplate="%s | PCV Ideathon" defer={false}>
        <Title>People</Title>
        <meta charSet="utf-8" />
        <link rel="canonical" href={"https://www.ideathon.pennclimateventures.org/people"} />
        <meta name="description" content="Penn Climate Ventures official prize people." />
      </Helmet>
      <Navbar />
      <div css={`padding: 60px 12vw;`}>
        <Title>2021 Ideathon Winners</Title>
        {winners.map(team => (
          <WinnerDiv>
            <WinnerHeader>{team.placementText} - {team.teamName}</WinnerHeader>
            <br/>
            <Text>{team.solutionDescription}</Text>
            <br/>
            <br/>
            <TeamMembers>
              {team.teamMembers.map(member => (
                <>
                  {member.linkedin &&
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Member>
                        {member.picture &&
                          <Headshot src={member.picture} alt={member.name}/>
                        }
                        {!member.picture &&
                          <div css={`display: table-cell; height: ${ImageSize}; width: ${ImageSize};
                            border: 1px solid gray; text-align: center; vertical-align: middle;`}>
                            <Text fontSize={`0.8rem`}>Image could not be found</Text>
                          </div>
                        }
                        <Name>{member.name}</Name>
                      </Member>
                    </Link>
                  }
                  {!member.linkedin &&
                    <Link>
                      <Member>
                        <Headshot src={member.picture} alt={member.name}/>
                        <Name>{member.name}</Name>
                      </Member>
                    </Link>
                  }
                </>
              ))}
            </TeamMembers>
            <br/><br/>
            <PitchDeck src={team.pitchDeck}/>
          </WinnerDiv>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Winners2021;
