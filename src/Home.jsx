/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import {
  makeStyles, useMediaQuery, useTheme, Collapse, Switch, FormControlLabel
} from '@material-ui/core'
import { useSelector } from 'react-redux'
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
  switch: {
    position: 'relative',
    gridRow: 1,
    gridColumn: 2,
    margin: '0 auto',
    top: 5,
    color: 'white',
    textShadow: '0 0 5px black',
  },
}))

function Home() {
  const classes = useStyles()
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(true)
  useEffect(() => {
    if (!md) setOpen(true)
    else if (md) setOpen(false)
  }, [md])
  const selectedWeather = useSelector((state) => {
    const empty = Object.keys(state.selectedWeather).length === 0
    if (empty) {
      return null
    }
    return state.selectedWeather
  })
  useEffect(() => setOpen(!md), [selectedWeather])
  const bg = useSelector((state) => state.bg)
  return (
    <div className={clsx(
      classes.grid, { [classes.gridCenter]: md },
    )}
    >
      {
        selectedWeather && (
          <div className={clsx(classes.root, classes.cardRoot, classes[bg])}>
            <Card {...selectedWeather} />
          </div>
        )
      }
      <Collapse
        in={open || !selectedWeather}
        className={clsx(
          classes.root,
          classes.selectorRoot,
          {
            [classes.selectorCenter]: md,
            [classes[bg]]: !md,
          },
        )}
      >
        <Selector />
      </Collapse>
      {md && selectedWeather && (
        <div className={classes.switch}>
          <FormControlLabel
            control={(
              <Switch
                size="small"
                color="primary"
                onChange={({ target: { checked } }) => setOpen(checked)}
                checked={open}
              />
            )}
            label="Location"
          />
        </div>
      )}
    </div>
  )
}

export default Home
