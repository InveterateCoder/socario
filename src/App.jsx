import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import Home from './Home.jsx'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
