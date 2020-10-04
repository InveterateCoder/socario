import React from 'react'
import {
  ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, makeStyles,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { removeCity, selectCity } from './store/actions'

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#ECF7FD',
    },
  },
}))

function City({
  name, country, temp, id,
}) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(selectCity(id))
  }

  return (
    <ListItem button dense disableRipple className={classes.listItem} onClick={onClick}>
      <ListItemText primary={`${name}, ${country}`} />
      <ListItemText style={{ textAlign: 'right', paddingRight: '1em' }} secondary={`${temp}℃`} />
      <ListItemSecondaryAction>
        <IconButton size="small" edge="end" onClick={() => dispatch(removeCity(id))}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default City
