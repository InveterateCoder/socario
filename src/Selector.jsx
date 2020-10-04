import React, { useState } from 'react'
import {
  makeStyles, Paper, List, Typography, TextField,
  InputAdornment,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { useDispatch } from 'react-redux'
import WeatherListItems from './WeatherListItems.jsx'
import SearchListItems from './SearchListItems.jsx'
import { addCity } from './store/actions'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: '20px 20px 0 0',
  },
  list: {
    overflowY: 'auto',
    height: '436px',
  },
}))

let timer = null

function Selector() {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const onChange = ({ target: { value: val } }) => {
    setInput(val)
    clearTimeout(timer)
    if (val === '') {
      setSearch(val)
    } else {
      timer = setTimeout(() => {
        setSearch(val)
      }, 500)
    }
  }

  const searchSelect = (name, lat, lon) => {
    setSearch('')
    setInput('')
    dispatch(addCity(name, lat, lon))
  }

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
        value={input}
        onChange={onChange}
      />
      <List className={classes.list}>
        {
          search
            ? <SearchListItems search={search} select={searchSelect} />
            : <WeatherListItems />
        }
      </List>
    </Paper>
  )
}
export default Selector
