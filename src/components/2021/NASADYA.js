import React from "react"
import { Subtitle, Text, Link } from "../shared/Typography"
import { Headshot, Name, Logo, Columns } from "./Layout"

import NASADYALogo from "../../images/winners2021/NASADYA.jpg"
import Chaitanya from "../../images/winners2021/ChaitanyaGulati.jpg"
import Praneeth from "../../images/winners2021/PraneethNagarjuna.jpg"
import Devansh from "../../images/winners2021/DevanshSethia.jpg"
import Khadeeja from "../../images/winners2021/KhadeejaMalik.jpg"
import Dan from "../../images/winners2021/DanDuffy.jpg"
import Nate from "../../images/winners2021/NateKraemer.jpg"
import Madhu from "../../images/winners2021/MadhuDevi.jpg"

const NASADYA = () => (
    <div>
        <Subtitle css={`margin-top: 2vw`}>Honorable Mention - NASADYA</Subtitle>
        <Logo src={NASADYALogo} alt="NASADYA" css={`width: 20vw`}/>
        <Text>NASADYA solves the growing problem of variability management in the 
            energy grid for power plants by converting a money-losing by-product 
            (excess energy) into valuable co-products (green hydrogen & oxygen).</Text>
        
        <Columns css={`text-align: center`}>
            <figure>
                <Headshot src={Chaitanya} alt="Chaitanya Gulati" css={`width: 10vw; height: 10vw`}/>
                <Name>Chaitanya Gulati</Name>
            </figure>
            <figure>
                <Headshot src={Praneeth} alt="Praneeth Nagarjuna" css={`width: 10vw; height: 10vw`}/>
                <Name>Praneeth <br/> Nagarjuna</Name>
            </figure>
            <figure>
                <Headshot src={Devansh} alt="Devansh Sethia" css={`width: 10vw; height: 10vw`}/>
                <Name>Devansh <br/> Sethia</Name>
            </figure>
            <figure>
                <Headshot src={Khadeeja} alt="Khadeeja Malik" css={`width: 10vw; height: 10vw`}/>
                <Name>Khadeeja <br/> Malik</Name>
            </figure>
            <figure>
                <Headshot src={Dan} alt="Dan Duffy" css={`width: 10vw; height: 10vw`}/>
                <Name>Dan Duffy</Name>
            </figure>
            <figure>
                <Headshot src={Nate} alt="Nate Kraemer" css={`width: 10vw; height: 10vw`}/>
                <Name>Nate Kraemer</Name>
            </figure>
            <figure>
                <Headshot src={Madhu} alt="Madhu Devi" css={`width: 10vw; height: 10vw`}/>
                <Name>Madhu Devi</Name>
            </figure>
        </Columns>

        <Text><b>LinkedIn:</b>
            <br/>
            <Link href="https://www.linkedin.com/company/nasadya">https://www.linkedin.com/company/nasadya</Link>
        </Text>

    </div>
)


export default NASADYA