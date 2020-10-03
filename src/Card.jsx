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

function Card() {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <CardHeader
        country="RU"
        name="Moscow"
        timezone={10800}
        dt={1601751932}
      />
      <CardBody
        main="Clouds"
        temp={Math.floor(13.12)}
        tempMin={Math.floor(11)}
        tempMax={Math.floor(15)}
        humidity={66}
        pressure={1029}
        wind={4}
        sunrise={1601696195}
        sunset={1601737210}
        timezone={10800}
      />
    </Paper>
  )
}

export default Card
