import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5'
    },
    secondary: {
      main: '#f50057'
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: '#ffffff',
      disabled: 'rgba(255, 255, 255, 0.7)'
    }
  }
})
