import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";


export const NavBar = styled.div`
    color: white;
    padding: 1.2vw;
    display:flex;
    flex-direction: row;
    background-color: #419c9a;
    justify-content : left;

    @media only screen and (max-width: 750px){
    flex-direction: column;
    height: 20vw;
    justify-content: space-around;
    }
    @media only screen and (max-width: 500px){
      flex-direction: column;
      height: 25vw;
      justify-content: space-around;
      }
`


export const Tab = styled(Link)`
    padding :0.8vw 2vw 0.8vw 2vw;
    background-color: #30c9c6 ;
    margin-left: 3vw; margin-right:3vw;
    border-radius: 7px;
    height:vw;
    text-decoration:none;

    @media only screen and (max-width: 750px){
      width:85%;
      margin:auto;
      }
      &:visited{
        color: white;
      }
      &:hover {
        background-color: #ebf5f5;
        color: #30c9c6;
      }

      
`