import React from "react"
import Helmet from "react-helmet"
import { Navbar, Footer} from "../components"
import s from "styled-components"
import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import Button from "../components/shared/Button"
import Headshot from "../components/shared/Headshot"
import {GREEN} from "../utils/constants.js"

import Dennis from '../images/dennis woodside.jpg'
import Lidiya from '../images/lidiya-dervisheva.jpeg'
import Seth from '../images/seth.jpg'
import Marisa from '../images/marisa sweeney.jpg'
import Sam from '../images/sam bursten.jpeg'

const Columns = s.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2vw;
`

const EventTitle = s(Subtitle)`
    color: ${GREEN};
`

const EventSubtitle = s(Subtitle)`
    font-size: 1.5rem;
`

const NumList = s.ol`
    font-size: 1.2rem;
    font-family: Avenir;
    margin-left: 20px;
`

const EventGroup = s.div`
    margin: 2vw 0;
`

const RoundedRectangle = s.div`
    text-align: center;
    border-style: solid;
    border-radius: 40px;
    width: 70vw;
    padding: 3vw;
    display: block;
    margin: 4vw auto;
`

const EventDetails = ({date, description, buttonText, buttonLink}) => {
    const dayRegex = /\s\d{1,2}\s/;
    const monthRegex = /^\w{3}/;
    const timeRegex = /(\d{1,2}:\d{1,2}|\d{1,2})\s(A|P)M/;

    const month = date ? date.match(monthRegex) : "";
    const day = date ? date.match(dayRegex) : "";
    const time = date ? date.match(timeRegex)[0] : "";

    return (
        <div
            css={`display: flex;
                  border-left: 0.3rem solid ${GREEN};
                  flex-wrap: wrap;
                  margin: 1vw 2vw;
                  `}>
            {date && <div css={`flex-basis: 7vw; padding-left: 1vw; text-align: center`}>
                    <Text fontSize="1.2rem" roboto bold>{month}</Text>
                    <Text fontSize="2.2rem" roboto bold css={`line-height: 1`}>{day}</Text>
                    <Text fontSize="1.2rem" roboto bold >{time}</Text>
                    <Text roboto bold css={`line-height: 0.8`}>EST</Text>
            </div>}
            <div css={`flex-basis: 55vw; padding-left: 1vw`}>
                <Text>{description}</Text>
                {buttonText && <Button href={buttonLink}>{buttonText}</Button>}
            </div>
        </div>
    )
}

const Timeline = () => (
    <div>
        <EventGroup>
            <EventTitle>Registration</EventTitle>
            <EventSubtitle>Check Your Eligibility</EventSubtitle>
            <EventDetails
                description={<>All students enrolled at any institution around the world are invited to compete in the PCV Prize.
                    <br/>
                    Teams of up to 5 will pitch their early stage climate startup concepts to industry leaders and venture capitalists.
                    <br/>
                    Team eligibility varies by competition track.</>}
                buttonText="Official Rules"
                buttonLink="/rules"/>
            

            <EventSubtitle>Pick a Track</EventSubtitle>
            <EventDetails
                description={<><b>Collegiate Tracks</b>
                    <NumList>
                    <li>Waste & Circularity</li>
                    <li>Energy & Transportation​</li>
                    <li>Food & Agriculture</li>
                    <li>Wildcard</li>
                    </NumList>
                    ​<br/> 
                    <b>High School Tracks</b>
                    <br/>
                    <NumList>
                    <li>Spark Teen High School Track</li>
                    </NumList></>}
                buttonText="Find Your Track"
                buttonLink="/tracks"/>

            <EventSubtitle>Individual Registration</EventSubtitle>
            <EventDetails
                date="MAR 29 11:59 PM EST"
                description="Register individually and start building your team through our online PCV Prize Discord community and stay up to date with our latest news."
                buttonText="Register Now!"
                buttonLink="https://tinyurl.com/PCVPrizeS21"/>

            <EventSubtitle>Team Registration</EventSubtitle>
            <EventDetails
                date="APR 5 11:59 PM EST"
                description={<>Teams will need to fully register by the deadline to qualify for the competition. Teams will need to choose a track in which to complete. Full rules can be found <Link href="/rules">here</Link>.</>}
                buttonText="Team Registration"
                buttonLink="https://tinyurl.com/PCVPrizeTeamRegistration"/>
        </EventGroup>
        <EventGroup>
            <EventTitle>Attend a State-of-the-Field Panel</EventTitle>
            <Text>Discussions about current research, innovations, and challenges with leading experts in the fields.</Text>
            
            <EventSubtitle fontSize="0.6rem">Waste & Circularity</EventSubtitle>
            <Text>Co-sponsored by 
                <Link href="https://www.sustainability.upenn.edu/partners/student-groups"> Penn SSAP</Link>
            </Text>
            <EventDetails
                date="MAR 30 8 PM EST"
                description={<>Dr. Jim Hagan @ <Link href="https://earth.sas.upenn.edu/people/james-hagan">Penn LPS</Link>
                    <br/>
                    Shuo Yang @ <Link href="https://fiftyyears.com/team/shuo-yang">Fifty Years</Link>
                    <br/>
                    with Caitlyn McCloskey from <Link href="http://pennenvironmentalgroup.weebly.com/">PEG</Link> as moderator</>}/>

            <EventSubtitle>Energy & Transportation</EventSubtitle>
            <Text>Co-sponsored by the
                <Link href="http://pennenvironmentalgroup.weebly.com/"> Penn Environmental Group</Link>
            </Text>      
            <EventDetails
                date="APR 1 5 PM EST"
                description={<>Dr. Arthur van Benthem @ <Link href="http://www.arthurvanbenthem.com/">Wharton</Link>
                    <br/>
                    Dr. Peter Psarras @ <Link href="https://kleinmanenergy.upenn.edu/news-insights/penn-carbon-capture-expert-joins-biden-administration/">Penn Carbon Capture</Link>
                    <br/>
                    Ally Warson @ <Link href="https://www.up.partners/ally-warson">UP Partners</Link>
                    <br/>
                    E. Mitchell Swaan @ <Link href="https://philaenergy.org/about-pea/board-and-staff/e-mitchell-swann-secretary/">PEA</Link>
                    <br/>
                    with Ben May from <Link href="https://thinkoceanglobal.org/ben-may">ThinkOcean</Link> as moderator</>}/>          

            <EventSubtitle>Food & Agriculture</EventSubtitle>
            <Text>Co-sponsored by the
                <Link href="https://www.agribusiness-club.com/"> Wharton AgriBusiness Club</Link>
            </Text>          
            <EventDetails
                date="APR 2 4 PM EST"
                description={<>Dr. Zhengxia Dou @ <Link href="https://www.vet.upenn.edu/research/centers-laboratories/research-laboratory/research-laboratory/dou-laboratory">Penn Vet</Link>
                    <br/>
                    Dr. David Galligan @ <Link href="https://www.vet.upenn.edu/people/faculty-clinician-search/davidgalligan">Penn Vet</Link>
                    <br/>
                    Alex Behar @ <Link href="https://cultiviansbx.com/news-and-events/about/meet-the-team/alex-behar/">Cultivian Sandbox</Link>
                    <br/>
                    with Akaash Padmanabha from Penn Dining Advisory as moderator</>}/>      
            <Button href="https://tinyurl.com/PCVPrizeS21">Get the Link</Button>
        </EventGroup>

        <EventGroup>
            <EventTitle>PCV Prize Launch Event</EventTitle>
            <Text>You will be briefed on prize details, hear from Dr. Majumdar, and get a chance to network with peers.</Text>
                <EventSubtitle>Opening Keynote with Dr. Arun Majumdar</EventSubtitle>
                <EventDetails
                    date="APR 3 1 PM EST"
                    description={<>Founding Director @ <Link href="https://arpa-e.energy.gov/">ARPA-E</Link>
                        <br/>
                        Former VP, Energy @ <Link href="https://google.com/">Google</Link>
                        <br/>
                        Co-Director, Precourt Institute for Energy @ <Link href="https://energy.stanford.edu/">Stanford</Link></>}/>
                
            <EventSubtitle>Find a Team</EventSubtitle>
            <EventDetails 
                date="APR 3 2 PM EST"
                description="Speed-dating, but for climate co-founders."/>
        </EventGroup>

        <EventGroup>
            <EventTitle>Workshop Your Proposal</EventTitle>
            <EventSubtitle>VC Panel: Investing, Due Diligence, and Strategic Partnerships</EventSubtitle>
            <Text>Co-sponsored by <Link href="https://collegiate.vc/penn"> Penn Undergraduate Capital Partners</Link></Text>
            <EventDetails
                date="APR 13 5 PM EST"
                description={<>Kimberly Zou @ <Link href="https://www.linkedin.com/in/kimberly-zou/">Energy Impact Partners</Link>
                    <br/>
                    Ry Storey-Fisher @ <Link href="https://www.linkedin.com/in/ry-storey-fisher/">Powerhouse Fund</Link>
                    <br/>
                    Franz Hochstrasser @ <Link href="https://www.raisegreen.com/">Raise Green</Link></>}/>
        
            <EventSubtitle>Pitch Office Hours</EventSubtitle>
            <EventDetails
                description="Sign up for mentor office hours."
                buttonText="Sign Up Here"/>
        </EventGroup>

        <RoundedRectangle>
            <Text fontSize="2rem" roboto bold>First Round Judging <br/> Due 4/16 at 11:59 PM EST</Text><br/>
            <Button href="https://tinyurl.com/PCVPrizeSubmission">Submit Your Decks!</Button>
        </RoundedRectangle>
    </div>
)


const Finals = () => (
    <RoundedRectangle>
        <Text fontSize="2rem" roboto bold>Live Finals, 4/24 at 12 PM EST, <br/> with keynote from</Text>
        <div css={`display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2vw;`}>
            <Headshot 
                imageSrc={Dennis} 
                imageAlt={"Dennis"} 
                name={"Dennis Woodside"} 
                description={"President of Impossible Foods"}/>
        </div>

        <Text fontSize="2rem" roboto bold>and judging by</Text>

        <Columns>
            <Headshot 
                    imageSrc={Lidiya} 
                    imageAlt={"Lidiya Dervisheva"} 
                    name={"Lidiya Dervisheva"} 
                    description={<>Partner <br/> @ Next47</>}/>
            <Headshot 
                imageSrc={Seth} 
                imageAlt={"Seth Bannon"} 
                name={"Seth Bannon"} 
                description={<>Founding Partner <br/> @ Fifty Years</>}/>
            
            <Headshot 
                imageSrc={Marisa} 
                imageAlt={"Marisa Sweeney"} 
                name={"Marisa Sweeney"} 
                description={<>Director <br/> @ Generate Capital</>}/>

            <Headshot 
                imageSrc={Sam} 
                imageAlt={"Sam Bursten"} 
                name={"Sam Bursten"} 
                description={<>Vice President <br/>@ Energy Impact Partners</>}/>
        </Columns>
    </RoundedRectangle>
)


const Schedule = () => (
        <>
        <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize">
                <title defer={false}>Schedule</title>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.prize.pennclimateventures.org/schedule" />
                <meta name="description" content="Penn Climate Ventures official schedule."/>
        </Helmet>
        <Navbar />
        <div css={`padding: 6vw 12vw;`}>
            <Title>PCV Prize 2021 Schedule</Title>
            <Subtitle>Dates for 2022 TBA</Subtitle>
            <Timeline />
            <Finals />
        </div>
        <Footer />
    </>
)

export default Schedule