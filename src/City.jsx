import React from 'react'
import {
  ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, makeStyles,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#ECF7FD',
    },
  },
}))

function City() {
  const classes = useStyles()

  return (
    <ListItem button dense disableRipple className={classes.listItem}>
      <ListItemText primary="Russia, Moscow" />
      <ListItemText style={{ textAlign: 'center' }} secondary="15 &#8451;" />
      <ListItemSecondaryAction>
        <IconButton size="small" edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default City
