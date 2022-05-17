import React from 'react'

import Container from '@mui/material/Container'

import { homeStyles } from './styles'

const Home = () => {
  return (
    <Container sx={homeStyles.container}>
      <h1>IF7103 - SISTEMAS EXPERTOS PARA LA ADMINISTRACIÓN</h1>
      <h2>Juan Carlos Sequeira Piedra - B97452</h2>
    </Container>
  )
}

export default Home
