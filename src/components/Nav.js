import React from 'react'
//import styled from 'styled-components';
//import tw from "twin.macro";
import { NavLink as Link } from "react-router-dom";
import { NavBar,Tab } from './styling/nav.style';


export default function Nav() {
  return (
    <NavBar>
        <Tab href='../../public/index.js' to='/'>Home</Tab>
        <Tab  to='/about'>About Us</Tab>
        <Tab to='/contact'>Contact</Tab>
    </NavBar>
  )
}
