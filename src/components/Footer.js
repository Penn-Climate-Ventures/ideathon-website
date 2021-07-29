import React from 'react'
import s from "styled-components"
import  MenuButton from './shared/MenuButton'
import { mediaMaxWidth, GREY } from '../utils/constants'

import Facebook from "../images/menu/facebook.png"
import Instagram from "../images/menu/instagram.png"
import LinkedIn from "../images/menu/linkedin.png"
import Email from "../images/menu/email.png"

const FooterButton = s(MenuButton).attrs(() => ({
    fontSize: `.2rem`
}))`
    cursor: pointer;
    z-index: 999;
    ${({border}) => border && `border-right: 0.1rem solid ${GREY}`};

    ${mediaMaxWidth("780px")} {
        border: none;
        padding: 10px 0;
    }
`

const FooterLevel = s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0 60px 0;

    ${mediaMaxWidth("780px")} {
        flex-direction: column;      
    }
`

const SocialMediaWrapper = s.span`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${mediaMaxWidth("780px")} {
        margin-top: 10px
    }
`

const SocialMedia = s.img`
    height: 1.5rem;
    object-fit: cover;
    margin: 0 8px;
`

const FooterLayout = ({ className }) => <footer>
    <FooterLevel>
        <FooterButton border href="/rules">Official Rules</FooterButton>
        <FooterButton border href="/schedule">Schedule</FooterButton>
        <FooterButton border href="/People">People</FooterButton>
        <FooterButton border href="/Sponsors">Sponsors</FooterButton>
        <FooterButton border href="/faq">FAQs</FooterButton>
        <FooterButton href="/about">About PCV</FooterButton>
        <SocialMediaWrapper>
        <a href="https://www.facebook.com/pennclimateventures"><SocialMedia src={Facebook} alt="Facebook"/></a>
        <a href="https://www.instagram.com/pennclimateventures/?hl=en"><SocialMedia src={Instagram} alt="Instagram"/></a>
        <a href="https://www.linkedin.com/company/penn-climate-ventures"><SocialMedia src={LinkedIn} alt="LinkedIn"/></a>
        <a href="mailto: pennclimateventures@gmail.com"><SocialMedia src={Email} alt="Email"/></a>
        </SocialMediaWrapper>
    </FooterLevel>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`