import React from 'react'
import {
  makeStyles, Paper, List, Typography, TextField,
  InputAdornment,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import clsx from 'clsx'
import City from './City.jsx'
import CityHeader from './CityHeader.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 3,
    maxWidth: theme.cardWidth,
    width: '100%',
    margin: `0 ${theme.spacing(2)}px 0 auto`,
    paddingTop: theme.spacing(4),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'contain',
  },
  bgDay: {
    backgroundImage: 'url(img/day.png)',
  },
  bgNight: {
    backgroundImage: 'url(img/night.png)',
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '20px 20px 0 0',
  },
}))

function Selector() {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, classes.bgDay)}>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" align="center">
          Location
        </Typography>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
          label="City"
        />
        <List>
          <City />
          <CityHeader letter="N" />
          <City />
          <City />
        </List>
      </Paper>
    </div>
  )
}
export default Selector
