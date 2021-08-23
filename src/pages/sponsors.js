import React from "react"
import s from "styled-components"

import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Helmet from "react-helmet"

import Amasia from "../images/2021/sponsors/Amasia.jpg"
import SJF from "../images/2021/sponsors/SJF.png"

import FacebookIcon from "../images/menu/facebook.png"
import LinkedInIcon from "../images/menu/linkedin.png"
import TwitterIcon from "../images/menu/twitter.png"
import WebsiteIcon from "../images/menu/website.png"

const Logo = s.img`
    display: block;
    height: 60px;
    margin: 10px auto;
`

const LogoSmall = s.img`
    display: block;
    height: 90px;
    margin: 10px auto;
`

const Social = s.div`
    margin: 20px 0;
`

const SocialIcon = ({link, icon}) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img
            css={`
                height: 25px;
                padding: 0 10px;`}
            src={icon} alt={link}/>
    </a>
)

const Company = ({imageSrc, name, logoSize, bio, website, facebook, linkedin, twitter}) => (
    <div css={`padding: 15px 0;`}>
        <Subtitle>{name}</Subtitle>
        {logoSize==="small" && <LogoSmall src={imageSrc} alt={name}/>}
        {logoSize!=="small" && <Logo src={imageSrc} alt={name}/>}
        <Text>{bio}</Text>
        <Social>
            {website && <SocialIcon link={website} icon={WebsiteIcon}/>}
            {facebook && <SocialIcon link={facebook} icon={FacebookIcon}/>}
            {linkedin && <SocialIcon link={linkedin} icon={LinkedInIcon}/>}
            {twitter && <SocialIcon link={twitter} icon={TwitterIcon}/>}
        </Social>
    </div>
  )

const Sponsors = () => (
    <>
        <Helmet defaultTitle="PCV Ideathon" titleTemplate="%s | PCV Ideathon">
                <title defer={false}>Sponsors</title>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.ideathon.pennclimateventures.org/sponsors" />
                <meta name="description" content="Sponsor the Penn Climate Ventures Ideathon."/>
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
            <Company
                imageSrc={SJF}
                logoSize="small"
                name="SJF Ventures"
                bio="SJF Ventures is a venture capital fund focused on delivering superior financial returns through investments in high growth, positive impact companies that are creating a healthier, smarter and cleaner future. SJF has a 22-year successful record of assisting visionary and talented management teams in building industry leading businesses. SJF provides strong expertise and networks in many sectors, including clean energy and mobility, supply chain and circular economy, sustainable food, health and wellness, and education and workforce technologies. SJF Ventures I, II, III, IV, and V have invested in over 75 portfolio companies to date."
                website="https://sjfventures.com/"
                facebook="https://www.facebook.com/sjfventures"
                linkedin="https://twitter.com/sjfventures"
                twitter="https://www.linkedin.com/company/sjf-ventures/mycompany/" />

            <Text>
                If you would like to become a sponsor of our 2022 Prize, please shoot us an email at
                <Link href="mailto:pennclimateventures@gmail.com"> pennclimateventures@gmail.com</Link>!
            </Text>
        </div>
        <Footer />
    </>
)

export default Sponsors
