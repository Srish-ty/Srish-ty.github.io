import React from 'react'
//import styled from "styled-components";
import { Headi } from './styling/header.style';

export default function Header(props) {
  return (
    <Headi>
      {props.children}
    </Headi>
  );
}
