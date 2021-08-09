import React from "react"
import { Subtitle, Text, Link } from "../shared/Typography"
import { Logo, Columns, ColumnText, Figure, TeamSubtitle } from "./Layout"

import FoliaLogo from "../../images/winners2021/Folia.jpg"
import Rosanna from "../../images/winners2021/RosannaJiang.jpg"
import Caroline from "../../images/winners2021/CarolineLi.jpg"
import Zachary from "../../images/winners2021/ZacharyHuang-Ogata.jpg"
import Stephanie from "../../images/winners2021/StephanieBi.jpg"
import Ryoma from "../../images/winners2021/RyomaHarris.jpg"

const Folia = () => (
    <div>
        <Subtitle css={`margin-top: 2vw`}>Second Place - Folia</Subtitle>
        <Logo src={FoliaLogo} alt="Folia" css={`width: 20vw`}/>
        <Text>Folia is a B2B Philadelphia-based company dedicated to diverting all 
            food waste from the landfill. Through an online platform, they ensure quality 
            matches between producers of food waste and food upcycling companies.</Text>
        
        <Columns css={`text-align: center`}>
            <Link href="https://www.linkedin.com/in/rosanna-jiang-a04139201/">
                <Figure name="Rosanna Jiang" source={Rosanna}/>
            </Link>
            <Link href="https://www.linkedin.com/in/caroline-l-185005128/">
                <Figure name="Caroline Li" source={Caroline}/>
            </Link>
            <Link href="https://www.linkedin.com/in/zacharyhuangogata/">
                <Figure name={<>Zachary <br/> Huang-Ogata</>} source={Zachary}/>
            </Link>
            <Link href="https://www.linkedin.com/in/stephanie-b-ba88b1169/">
                <Figure name="Stephanie Bi" source={Stephanie}/>
            </Link>
            <Link href="https://www.linkedin.com/in/ryomah/">
                <Figure name="Ryoma Harris" source={Ryoma}/>
            </Link>
        </Columns>

        <Columns>
            <ColumnText left>
                <TeamSubtitle>What was competing in the PCV Prize like?</TeamSubtitle>
                <Text>"As a team, we're really glad to participate in the movement 
                    to bring more environmental innovation to campus. Speaking to other 
                    innovators and funders in the sustainability space was a rewarding 
                    experience, especially since our entire team was brand new to 
                    environmental entrepreneurship."</Text>
            </ColumnText>
            <ColumnText right>
                <TeamSubtitle>Future Plans?</TeamSubtitle>
                <Text>"Over the summer, Folia is looking for web developers and other 
                    help to build out our online platform and get a pilot program running 
                    by the fall. We'd encourage all like-minded, passionate students to 
                    reach out!"
                    <br/>
                    <br/>
                    <b>View their deck!</b>
                    <br/>
                    <Link href="https://tinyurl.com/FoliaPitch2021">
                        https://tinyurl.com/FoliaPitch2021
                    </Link>
                    <br/>
                </Text>
            </ColumnText>
        </Columns>       
    </div>
)

export default Folia
