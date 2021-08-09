import React from "react"
import { Subtitle, Text, Link } from "../shared/Typography"
import { Name, Columns, ColumnText, TeamSubtitle } from "./Layout"

import TeamChaetoLogo from "../../images/winners2021/TeamChaeto.jpg"
import ChrisNick from "../../images/winners2021/ChrisAndNickKwok.jpg"

const TeamChaeto = () => (
    <div>
        <Subtitle css={`margin-top: 2vw`}>Third Place - Team Chaeto</Subtitle>

        <Columns css={`text-align: center`}>
            <img src={TeamChaetoLogo} alt="Team Chaeto" css={`height: 25vw`}/>
            <figure>
                <img src={ChrisNick} alt="Christopher and Nicholas Kwok" css={`height: 25vw`}/>
                <Name>Christopher and Nicholas Kwok</Name>
            </figure>
        </Columns>

        
        <Text>Team Chaeto pioneers an ecological, sustainable, and feasible solution 
            to the existential crisis of ocean acidification. By modifying the activity 
            of hydrogenase and carbonic anhydrase enzymes in chaetomorpha, the team 
            invented chaeto biofilters to implement their novel strain of algae in 
            marine ecosystems.</Text>

        <Columns>
            <ColumnText left>
                <TeamSubtitle>What was competing in the PCV Prize like?</TeamSubtitle>
                <Text>"Competing in the Penn Climate Venture Prize was an eye-opening 
                    experience! Meeting the collegiate and high school teams with their 
                    startups was inspirational. As high school students, the competition 
                    was an opportunity to navigate entrepreneurship with incredible mentors."
                    <br/>
                    <br/>
                    <b>Find Team Chaeto on Instagram:</b> 
                    <br/>
                    <Link href="https://www.instagram.com/chris_kwok04/">@chris_kwok04</Link>
                    <br/>
                    <Link href="https://www.instagram.com/nicholas_kwok04/">@nicholas_kwok04</Link>
                    </Text>
            </ColumnText>
            <ColumnText right>
                <TeamSubtitle>Future Plans?</TeamSubtitle>
                <Text>"In the near future, Team Chaeto plans to continue research and 
                    development with their chaeto biofilters as an economically viable 
                    solution to ocean acidification. Furthermore, the company seeks 
                    numerous grants to raise capital and scale production. Eventually, 
                    Team Chaeto will pursue government contracts and partnerships with 
                    environmental agencies to market their solution globally."
                    <br/>
                    <br/>
                    <b>View their deck!</b>
                    <br/>
                    <Link href="https://tinyurl.com/TeamChaetoPitch2021">
                        https://tinyurl.com/TeamChaetoPitch2021
                    </Link>
                </Text>
            </ColumnText>
        </Columns>   
    </div>
)

export default TeamChaeto
