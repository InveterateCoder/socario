import React, { useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Home from './Home.jsx'
import theme from './theme'
import { updateListWeather } from './store/actions'
import keys from './keys'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    Object.entries(window.apiKeys).forEach(([key, val]) => {
      keys[key] = val
    })
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
