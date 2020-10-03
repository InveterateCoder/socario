import React from 'react'
import { makeStyles } from '@material-ui/core'
import Selector from './Selector.jsx'
import Card from './Card.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}))

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card />
      <Selector />
    </div>
  )
}

export default Home
