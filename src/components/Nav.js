import React from 'react'
import styled from 'styled-components';
import tw from "twin.macro";

const Tab = styled.span`
${
    tw` w-5
    `
}
`
const NavBar = styled.div`
${tw`flex
    
    `
}
`
export default function Nav() {
  return (
    <NavBar>Navigation bar
        <Tab>Home</Tab>
        <Tab>About Us</Tab>
        <Tab>Contact</Tab>
    </NavBar>
  )
}
