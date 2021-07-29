import React from "react"
import s from "styled-components"
import Kleinman from '../images/kleinman.png'
import MT from '../images/M&T_Logo_Tagline.png'
import SP2 from '../images/sp2logo.png'
import WGY from '../images/Whartonglobalyouthprogram.png'

import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Helmet from "react-helmet"

const Logo = s.img`
    height: 6vw;
    margin: 1vw;
`

const Sponsors = () => (
    <>
        <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize">
                <title defer={false}>Sponsors</title>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.prize.pennclimateventures.org/sponsors" />
                <meta name="description" content="Sponsor the Penn Climate Ventures Prize."/>
        </Helmet>
        <Navbar />
        <div css={`padding: 6vw 12vw;`}>
            <Title>
                Sponsors
            </Title>

            <Text fontSize="1.5rem" roboto bold>
                Help push the next generation into climate with quick, catalytic capital.
            </Text>

            <br/>

            <Subtitle>
                Our Supporters for the 2021 PCV Prize:
            </Subtitle>

            <Logo src={SP2} alt="SP2"/>
            <br/>
            <Logo src={Kleinman} alt="Kleinman"/>
            <br/>
            <Logo src={WGY} alt="WGY"/>
            <br/>
            <Logo src={MT} alt="MT"/>
            <br/>
            
            <Text>
                If you would like to become a sponsor of our 2022 Prize, please shoot us an email at 
                <Link href="mailto:pennclimateventures@gmail.com"> pennclimateventures@gmail.com</Link>!
            </Text>
        </div>
        <Footer />
    </>        
)

export default Sponsors
