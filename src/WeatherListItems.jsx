/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useSelector } from 'react-redux'
import City from './City.jsx'
import CityHeader from './CityHeader.jsx'

function WeatherListItems() {
  const watchedCities = useSelector((state) => {
    const groups = {}
    const list = [...state.watchedCities]
    list.forEach((city) => {
      const key = city.name.charAt(0).toLowerCase()
      if (!groups[key]) groups[key] = []
      groups[key].push(city)
    })
    return groups
  })

  const keys = Object.keys(watchedCities)
  keys.sort()
  const body = []
  keys.forEach((key) => {
    body.push(<CityHeader key={key} letter={key.toUpperCase()} />)
    watchedCities[key].forEach((city) => {
      body.push(<City key={city.id} {...city} />)
    })
  })
  return body
}

export default WeatherListItems
