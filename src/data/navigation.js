import Facebook from "../images/menu/facebook.png"
import Instagram from "../images/menu/instagram.png"
import LinkedIn from "../images/menu/linkedin.png"
import Email from "../images/menu/email.png"

import React from "react";
import s from "styled-components"

export const navLinks = [
  {
    linkName: "Official Rules",
    url: "/rules"
  },
  {
    linkName: "Schedule",
    url: "/schedule"
  },
  {
    linkName: "People",
    url: "/people"
  },
  {
    linkName: "Sponsors",
    url: "/sponsors"
  },
  {
    linkName: "FAQ",
    url: "/faq"
  },
  {
    linkName: "About PCV",
    url: "/about"
  },
]

const SocialMedia = s.img`
  height: 1.25rem;
  object-fit: cover;
`

export const smLinks = [
  {
    icon: <SocialMedia src={Instagram} alt="Instagram"/>,
    url: "https://www.instagram.com/pennclimateventures/"
  },
  {
    icon: <SocialMedia src={Facebook} alt="Facebook"/>,
    url: "https://www.facebook.com/pennclimateventures/"
  },
  {
    icon: <SocialMedia src={LinkedIn} alt="LinkedIn"/>,
    url: "https://www.linkedin.com/company/penn-climate-ventures/"
  },
  {
    icon: <SocialMedia src={Email} alt="Email"/>,
    url: "mailto: pennclimateventures@gmail.com"
  },
]