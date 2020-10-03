import React from 'react'
import {
  makeStyles, Paper, List, Typography, TextField,
  InputAdornment,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import City from './City.jsx'
import CityHeader from './CityHeader.jsx'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: '20px 20px 0 0',
  },
  list: {
    overflowY: 'auto',
    maxHeight: '438px',
  },
}))

function Selector() {
  const classes = useStyles()

  return (
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
      <List className={classes.list}>
        <City />
        <CityHeader letter="N" />
        <City />
        <City />
        <City />
        <CityHeader letter="N" />
        <City />
        <City />
        <City />
        <CityHeader letter="N" />
        <City />
        <City />
      </List>
    </Paper>
  )
}
export default Selector
