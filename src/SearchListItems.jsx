import React, { useMemo } from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import cities from './assets/worldcities.json'

function SearchListItems({ search, select }) {
  const list = useMemo(() => {
    const searchLower = search.toLowerCase()
    return cities.filter(([city]) => city.toLowerCase().startsWith(searchLower))
  }, [search])
  return list.map(([city, country, lat, lon]) => (
    <ListItem button key={lat + lon} onClick={() => select(city, lat, lon)}>
      <ListItemText primary={city} secondary={country} />
    </ListItem>
  ))
}

export default SearchListItems
