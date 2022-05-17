import React from 'react'

import Box from '@mui/material/Box'
import { footerSyles } from './styles'

const Footer = () => {
  return <Box component='footer' sx={footerSyles.footerContainer}>
    <Box component='span' sx={footerSyles.span}>
      <a href="https://www.jcspiedra.com/" target="_blank" rel="noreferrer">
        Jcspiedra
      </a>{' '}
      - San José, Costa Rica 2022
    </Box>
  </Box>
}

export default Footer
