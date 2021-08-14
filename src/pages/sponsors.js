import React from "react"
import s from "styled-components"

import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Helmet from "react-helmet"

import Amasia from "../images/2021/sponsors/Amasia.jpg"

import LinkedInIcon from "../images/menu/linkedin.png"
import TwitterIcon from "../images/menu/twitter.png"
import WebsiteIcon from "../images/menu/website.png"

const Logo = s.img`
    display: block;
    height: 60px;
    margin: 10px auto;
`

const Social = s.div`
    margin: 20px 0;
`

const SocialIcon = ({link, icon}) => (
    <a href={link}>
        <img 
            css={`
                height: 25px;
                padding: 0 10px;`}
            src={icon} alt={link}/>
    </a>
)

const Company = ({imageSrc, name, bio, website, linkedin, twitter}) => (
    <div css={`padding: 15px 0;`}>
        <Subtitle>{name}</Subtitle>
        <Logo
            src={imageSrc}
            alt={name}/>
        <Text>{bio}</Text>
        <Social>
            <SocialIcon link={website} icon={WebsiteIcon}/>
            {linkedin && <SocialIcon link={linkedin} icon={LinkedInIcon}/>}
            {twitter && <SocialIcon link={twitter} icon={TwitterIcon}/>}
        </Social>
    </div>
  )

const Sponsors = () => (
    <>
        <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize">
                <title defer={false}>Sponsors</title>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.prize.pennclimateventures.org/sponsors" />
                <meta name="description" content="Sponsor the Penn Climate Ventures Prize."/>
        </Helmet>
        <Navbar />
        <div css={`padding: 90px 12vw;`}>
            <Title>
                Sponsors
            </Title>

            <Text fontSize="1.5rem" bold css={`margin-bottom: 10px`}>
                Help push the next generation into climate with quick, catalytic capital.
            </Text>

            <Company 
                imageSrc={Amasia} 
                name="Amasia"
                bio="Amasia is a thesis-driven VC firm that invests in companies building a safer and more sustainable planet. Using a nuanced framework designed around behavior change, we invest in founders with global ambitions, at the Seed to Series B stages, across the United States, Southeast Asia, India, Europe and Latin America. We facilitate their growth with access to global markets, global best practices, and global knowledge."
                website="https://www.amasia.vc/"
                linkedin="https://www.linkedin.com/company/amasia/about/"
                twitter="https://twitter.com/amasiavc"/>
            
            <Text>
                If you would like to become a sponsor of our 2022 Prize, please shoot us an email at 
                <Link href="mailto:pennclimateventures@gmail.com"> pennclimateventures@gmail.com</Link>!
            </Text>
        </div>
        <Footer />
    </>        
)

export default Sponsors
