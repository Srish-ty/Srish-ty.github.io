import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import UsBox from '../components/UsBox';
//import { Tab } from '../components/styling/nav.style';
import { Hdng } from '../components/styling/header.style';


export default function AboutUs() {
  return (
    <>
    <Header><Hdng>About Us</Hdng></Header>
    <Nav></Nav>
    <UsBox><Hdng>This is Us</Hdng>    
    <img src="https://res.cloudinary.com/dxsyc4p2j/image/upload/v1676408827/us1_gygydy.jpg" alt='our pic' height={'275vw'}/>
    </UsBox>
    </>
  )
}
