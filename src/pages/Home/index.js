import React from 'react'

import Container from '@mui/material/Container'

const Home = () => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '5rem'
    }}>
      <h1>IF7103 - SISTEMAS EXPERTOS PARA LA ADMINISTRACIÓN</h1>
      <h2>Juan Carlos Sequeira Piedra - B97452</h2>
    </Container>
  )
}

export default Home
