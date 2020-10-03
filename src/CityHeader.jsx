import React from 'react'
import {
  ListItem, ListItemText, Typography,
} from '@material-ui/core'

export default function CityHeader({ letter }) {
  return (
    <ListItem>
      <ListItemText>
        <Typography color="textSecondary" variant="h4" style={{ paddingLeft: '0.1em' }}>{letter}</Typography>
      </ListItemText>
    </ListItem>
  )
}
