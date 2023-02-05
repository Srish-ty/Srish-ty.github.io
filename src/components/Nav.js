import React from 'react'
import styled from 'styled-components';
//import tw from "twin.macro";
import { NavBar } from './styling/nav.style';
import { Tab } from './styling/nav.style';


export default function Nav() {
  return (
    <NavBar>
        <Tab>Home</Tab>
        <Tab>About Us</Tab>
        <Tab>Contact</Tab>
    </NavBar>
  )
}
