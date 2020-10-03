import React from 'react'
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import clsx from 'clsx'
import Selector from './Selector.jsx'
import Card from './Card.jsx'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    maxHeight: '570px',
  },
  gridCenter: {
    gridTemplateColumns: '0 1fr 0 !important',
  },
  root: {
    maxWidth: theme.cardWidth,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'contain',
  },
  cardRoot: {
    gridColumn: 2,
    gridRow: 1,
    paddingTop: '190px',
    margin: '0 auto',
  },
  selectorRoot: {
    gridColumn: 3,
    gridRow: 1,
    margin: `0 ${theme.spacing(2)}px 0 auto`,
    paddingTop: theme.spacing(4),
    backgroundColor: 'yellow',
  },
  selectorCenter: {
    margin: '0 auto !important',
    gridColumn: 2,
  },
  bgDay: {
    backgroundImage: 'url(img/day.png)',
  },
  bgNight: {
    backgroundImage: 'url(img/night.png)',
  },
}))

function Home() {
  const classes = useStyles()
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className={clsx(classes.grid, { [classes.gridCenter]: md })}>
      <div className={clsx(classes.root, classes.cardRoot, classes.bgDay)}>
        <Card />
      </div>
      <div
        className={clsx(
          classes.root,
          classes.selectorRoot,
          classes.bgDay,
          { [classes.selectorCenter]: md },
        )}
      >
        <Selector />
      </div>
    </div>
  )
}

export default Home
