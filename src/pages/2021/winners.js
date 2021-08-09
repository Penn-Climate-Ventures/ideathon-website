import React from "react"
import Helmet from "react-helmet"
import { Title } from "../../components/shared/Typography"
import { STEEL_BLUE } from "../../utils/constants"
import { Navbar, Footer } from "../../components"

import { Columns, ColumnText, TeamSummary } from "../../components/2021/Layout"
import Renecycle from "../../components/2021/Renecycle"
import Folia from "../../components/2021/Folia"
import TeamChaeto from "../../components/2021/TeamChaeto"
import NASADYA from "../../components/2021/NASADYA"

const Summary = () => (
    <div css={`text-align: center`}>
        <hr 
            css={`border-top: .2rem solid; 
                width: 20vw; 
                margin: 4vw auto`} />

        <div css={`margin: 0 10vw`}>
            <TeamSummary
                fontSize="1.6rem" 
                fontColor={STEEL_BLUE}>
                The 2021 PCV Prize drew 87 competing teams from Penn, Stanford, Columbia, UC Berkeley, U of Illinois, WashU, UTA, UChicago, UToronto, Cornell, UCSB, Princeton, Yale, Rice, and more.
            </TeamSummary> 
            <br/> 
            <br/>
            <TeamSummary fontSize="1.4rem">
            Winning pitches were chosen from 10 finalist teams at our virtual pitch event by 
            judges from Fifty Years, Next47, Energy Impact Partners, and Generate Capital:
            </TeamSummary> <br/>
        </div>

        <Columns css={`font-size: 0.6rem`}>
            <ColumnText>
                <TeamSummary fontColor={STEEL_BLUE}>Waste and Circularity</TeamSummary>
                <TeamSummary>Happy Earth Company<br/>
                    College Thrifts<br/> <br/></TeamSummary>
                <TeamSummary fontColor={STEEL_BLUE}>Wild Card</TeamSummary>
                <TeamSummary>Beyond Capacity <br/>
                        GarboCarbo<br/> <br/></TeamSummary>
            </ColumnText>

            <ColumnText>
                <TeamSummary fontColor={STEEL_BLUE}>Energy and Transportation</TeamSummary>
                <TeamSummary>Renecycle<br/>
                    NASADYA<br/> <br/></TeamSummary>
                <TeamSummary fontColor={STEEL_BLUE}>High School</TeamSummary>
                <TeamSummary>Team Chaeto <br/>
                    Promethean Energy<br/> <br/></TeamSummary>
            </ColumnText>

            <ColumnText>
                <TeamSummary fontColor={STEEL_BLUE}>Food and Agriculture</TeamSummary>
                <TeamSummary>Axo<br/>
                    Folia<br/> <br/></TeamSummary>
            </ColumnText>
        </Columns>
    </div>
)

const Winners2021 = () => (
    <>
        <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize" defer={false}>
            <Title>2021 Winning Pitches</Title>
            <meta charSet="utf-8" />
            <link rel="canonical" href={"https://www.prize.pennclimateventures.org/2021-winning-pitches"} />
            <meta name="description" content="Penn Climate Ventures 2021 winning pitches." />
        </Helmet>
        <Navbar />
        <div css={`padding: 6vw 12vw;`}>
            <Title>2021 Winning Pitches</Title>
            <Renecycle />
            <Folia />
            <TeamChaeto />
            <NASADYA />
            <Summary />
        </div>
        <Footer />
    </>
)

export default Winners2021