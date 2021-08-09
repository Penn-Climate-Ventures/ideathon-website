import React from "react"
import { Subtitle, Text, Link } from "../shared/Typography"
import { Logo, Columns, ColumnText, Figure, TeamSubtitle } from "./Layout"

import RenecycleLogo from '../../images/winners2021/Renecycle.jpg'
import Hunter from '../../images/winners2021/HunterLee.jpg'
import Mina from '../../images/winners2021/MinaLiang.jpg'
import Henry from '../../images/winners2021/HenryLei.jpg'
import David from '../../images/winners2021/DavidChang.jpg'
import Ian from '../../images/winners2021/IanGordon.jpg'

const Renecycle = () => (
    <div>
        <Subtitle css={`margin-top: 2vw`}>First Place - ReneCycle</Subtitle>
        <Logo src={RenecycleLogo} alt="Renecycle" css={`width: 40vw`}/>
        <Text>Using proprietary smart-lock technology, ReneCycle transforms everyday 
            bikes into easily manageable dockless bikeshare. Their fleet management 
            system's integrated hardware and software creates bikeshare that is secure, 
            accessible, and cost-efficient.</Text>
        
        <Columns css={`text-align: center`}>
            <Figure name="Hunter Lee" source={Hunter}/>
            <Figure name="Mina Liang" source={Mina}/>
            <Figure name="Henry Lei" source={Henry}/>
            <Figure name="David Chang" source={David}/>
            <Figure name="Ian Gordon" source={Ian}/>
        </Columns>

        <Columns>
            <ColumnText left>
                <TeamSubtitle>What was competing in the PCV Prize like?</TeamSubtitle>
                <Text>"Competing in the PCV competition was one of the most memorable 
                    experiences in my start-up journey so far. The competition was 
                    extremely professional without sacrificing the inspirational and 
                    collaborative atmosphere that makes startup work so meaningful. 
                    The judges asked sharp and insightful questions, and the organizers 
                    of the event made every transition so smooth. Even though we felt 
                    the adrenaline of presenting first of all the teams, the excitement 
                    never left us for the entire competition as we were hooked by the 
                    amazing ideas from all the other teams and the fantastic fireside 
                    chat with Dennis Woodside. Announcing the results live at the end of 
                    the competition was a thriller, and it was surreal when ReneCycle
                    was announced first. I feel proud to have participated in such a 
                    great event and feel immense gratitude towards all the organizers, 
                    mentors, judges, and participants who made this event possible. 
                    A huge shoutout to our PCV assigned mentor Nicholas Yiu for giving 
                    us such valuable insights." -- Henry</Text>
            </ColumnText>
            <ColumnText right>
                <TeamSubtitle>Future Plans?</TeamSubtitle>
                <Text>"ReneCycle is looking forward to using the funding from PCV to 
                    invest further into the product development of our smart bike lock! 
                    We are looking into partnering with new corporate campuses and 
                    municipal districts this Summer, and will be posting new updates on 
                    our website, LinkedIn, and instagram accounts. We've had an exciting 
                    product launch at Swarthmore College this Spring and will be soon 
                    providing new content on bike usage, product resilience, and footage 
                    of real student experiences. Stay tuned for exciting content and 
                    insights from the ReneCycle team!" -- Mina<br/>
                    <br/>
                    <b>LinkedIn:</b>
                    <br/>
                    <Link href="https://www.linkedin.com/company/renecycle">https://www.linkedin.com/company/renecycle </Link><br/>
                    <b>Website:</b>
                    <br/>
                    <Link href="https://www.renecycle.com/">https://www.renecycle.com/</Link><br/>
                    <b>Instagram:</b>
                    <br/>
                    <Link href="https://www.instagram.com/renecycle.inc/">https://www.instagram.com/renecycle.inc/</Link>
                </Text>
            </ColumnText>
        </Columns>       
    </div>
)


export default Renecycle