import React from 'react'
import {
  makeStyles, Paper,
} from '@material-ui/core'
import CardHeader from './CardHeader.jsx'
import CardBody from './CardBody.jsx'

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: '20px 20px 0 0',
    padding: `0
    ${theme.spacing(2)}px
    ${theme.spacing(4)}px
    ${theme.spacing(2)}px`,
  },
}))

function Card(prop) {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <CardHeader
        country={prop.country}
        name={prop.name}
        timezone={prop.timezone}
        dt={prop.dt}
      />
      <CardBody
        main={prop.main}
        temp={Math.round(prop.temp)}
        tempMin={Math.round(prop.tempMin)}
        tempMax={Math.round(prop.tempMax)}
        humidity={prop.humidity}
        pressure={prop.pressure}
        wind={prop.wind}
        sunrise={prop.sunrise}
        sunset={prop.sunset}
        timezone={prop.timezone}
      />
    </Paper>
  )
}

export default Card
