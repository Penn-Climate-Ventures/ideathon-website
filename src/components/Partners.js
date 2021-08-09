import React from "react"
import s from "styled-components"
import { SubText, Text, Link } from "./shared/Typography"
import { mediaMaxWidth } from "../utils/constants"


const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-left"
}))`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Level = s.div`
  margin: 2vw auto;
  width: 70vw;

  ${mediaMaxWidth("768px")} {
    display: flex;
    flex-direction: column;
  }
`

const PartnersLayout = ({ className }) => (
  <div className={`container has-text-centered ${className}`}>
    <Text fontSize="1.5rem" roboto bold>This event could not have been possible without our partners.</Text>
    <Level className="level">
      <LevelItem>
        <Text fontSize="1.2rem" roboto bold>Penn Institutions</Text>
        <br/>
        <SubText css={`text-align: center`}>
          <Link href="https://riskcenter.wharton.upenn.edu/">Wharton Risk Center</Link>
          <br />
          <Link href="https://www.whartonenergy.com/">Wharton Energy Network</Link>
          <br />
          <Link href="https://www.sp2.upenn.edu/">School of Social Policy & Practice</Link>
          <br />
          <Link href="https://fisher.wharton.upenn.edu/">Jerome Fisher Program for Management and Technology</Link>
          <br />
          <Link href="https://kleinmanenergy.upenn.edu/">Kleinman Center for Energy Policy</Link>
        </SubText>
      </LevelItem>
      <LevelItem>
        <Text fontSize="1.2rem" roboto bold>Student Groups</Text>
        <br/>
        <SubText css={`text-align: center`}>
          <Link href="https://www.climateleadersatpenn.com/">Climate Leaders @ Penn</Link>
          <br />
          <Link href="https://www.facebook.com/PennEnvironmentalGroup">Penn Environmental Group</Link>
          <br />
          <Link href="https://www.sustainability.upenn.edu/partners/student-groups">Student Sustainability Association at Penn</Link>
          <br />
          <Link href="https://www.agribusiness-club.com/">Wharton AgriBusiness Club</Link>
        </SubText>
      </LevelItem>
    </Level>
  </div>
)

export const Partners = s(PartnersLayout)`
  margin-top: 10vw;
  margin-bottom: 10vw;
`