import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import padTime from './padTime'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'space-around',
    '& > *': {
      textAlign: 'center',
    },
    gap: '.5em',
    rowGap: `${theme.spacing(5)}px`,
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    '& > img': {
      paddingBottom: theme.spacing(1.5),
    },
  },
  annot: {
    color: theme.palette.grey[500],
    fontSize: '.7em',
  },
  grey: {
    color: theme.palette.grey[500],
  },
}))

function CardBody(props) {
  const classes = useStyles()

  const {
    main,
    temp,
    tempMin,
    tempMax,
    humidity,
    pressure,
    wind,
    sunrise,
    sunset,
    timezone,
  } = props
  const daytime = (sunset - sunrise) * 1000
  const sunriseDate = new Date((sunrise + timezone) * 1000)
  const sunsetDate = new Date((sunset + timezone) * 1000)
  const daytimeHrs = Math.floor(daytime / 3600000)
  const daytimeMins = Math.floor((daytime % 3600000) / 60000)
  return (
    <div className={classes.grid}>
      <div className={classes.flex}>
        <img style={{ height: '42px', margin: '0 auto' }} src="img/Vector.svg" alt="weather" />
        <strong>{main}</strong>
      </div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center' }}>
          <span style={{ fontWeight: 300, fontSize: '3em' }}>{temp}</span>
          <span style={{ fontSize: '1.3em', marginRight: '-1.3em' }}>&#8451;</span>
        </div>
      </div>
      <div className={clsx(classes.flex, classes.grey)} style={{ justifyContent: 'space-around' }}>
        <span>
          {tempMax}
          &#8451;
          {' '}
          <img src="img/up.svg" alt="up" />
        </span>
        <span>
          {tempMin}
          &#8451;
          {' '}
          <img src="img/down.svg" alt="down" />
        </span>
      </div>
      <div className={classes.flex}>
        <img src="img/humidity.svg" alt="humidity" />
        <strong>
          {humidity}
          %
        </strong>
        <span className={classes.annot}>Humidity</span>
      </div>
      <div className={classes.flex}>
        <img src="img/barometer.svg" alt="barometer" />
        <strong>
          {pressure}
          {' '}
          mBar
        </strong>
        <span className={classes.annot}>Pressure</span>
      </div>
      <div className={classes.flex}>
        <img src="img/wind.svg" alt="wind" />
        <strong>
          {wind}
          {' '}
          km/h
        </strong>
        <span className={classes.annot}>Wind</span>
      </div>
      <div className={classes.flex}>
        <img src="img/sunrise.svg" alt="sunrise" />
        <strong>{padTime(sunriseDate.getUTCHours(), sunriseDate.getUTCMinutes())}</strong>
        <span className={classes.annot}>Sunrise</span>
      </div>
      <div className={classes.flex}>
        <img src="img/sunset.svg" alt="sunset" />
        <strong>{padTime(sunsetDate.getUTCHours(), sunsetDate.getUTCMinutes())}</strong>
        <span className={classes.annot}>Sunset</span>
      </div>
      <div className={classes.flex}>
        <img src="img/sand-clock.svg" alt="sand-clock" />
        <strong>{`${daytimeHrs}h ${daytimeMins}m`}</strong>
        <span className={classes.annot}>Daytime</span>
      </div>
    </div>
  )
}

export default CardBody
