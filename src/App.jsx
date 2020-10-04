import React, { useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Home from './Home.jsx'
import theme from './theme'
import { updateListWeather } from './store/actions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateListWeather())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
