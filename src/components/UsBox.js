import React from 'react';
import { Box } from './styling/usbox.style';

export default function UsBox(props) {
  return (
    <Box>{props.children}</Box>
  )
}
