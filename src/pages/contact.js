import React from 'react'
import Header from '../components/Header';
import Nav from "../components/Nav";
import { Hdng} from '../components/styling/header.style';
import UsBox from '../components/UsBox';

export default function Contact() {
  return (
    <>
    <Header><Hdng>Contact</Hdng></Header>
    <Nav></Nav>
    
    <UsBox><Hdng>You can contact us anytime</Hdng></UsBox>
    </>
  )
}
