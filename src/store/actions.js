/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import keys from '../keys'

async function request(req) {
  let url = null
  try {
    if (Array.isArray(req)) {
      if (req.length === 0) return null
      url = `group?id=${req.join(',')}`
    } else if (isNaN(req)) {
      url = `weather?lat=${req.lat}&lon=${req.lon}`
    } else {
      url = `weather?id=${req}`
    }
    if (!url) return null
    const res = await fetch(`https://api.openweathermap.org/data/2.5/${url}&appid=${keys.apiKey}&units=metric`)
    if (res.status !== 200) {
      alert(`Weather request failed with ${res.statusText}`)
    } else {
      const data = await res.json()
      return data
    }
  } catch (err) {
    alert(err.message)
  }
  return null
}

export const ADD_CITY = 'add_city'
export const addCity = (name, lat, lon) => async function addCityThunk(dispatch, getState) {
  const city = await request({ lat, lon })
  if (!city) return
  if (getState().watchedCities.some(({ id }) => id === city.id)) return
  dispatch({
    type: ADD_CITY,
    payload: {
      id: city.id,
      name,
      country: city.sys.country,
      temp: Math.round(city.main.temp),
    },
  })
}

export const REMOVE_CITY = 'remove_city'
export const removeCity = (id) => ({
  type: REMOVE_CITY,
  payload: id,
})

export const SELECT_CITY = 'select_city'
export const selectCity = (id) => async function selectCityThunk(dispatch) {
  const data = await request(id)
  if (!data) return
  dispatch({
    type: SELECT_CITY,
    payload: {
      country: data.sys.country,
      name: data.name,
      timezone: data.timezone,
      dt: data.dt,
      main: data.weather[0].main,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    },
  })
}

export const UPDATE_LIST_WEATHER = 'update_list_weather'
export const updateListWeather = () => async function updateListWeatherThunk(dispatch, getState) {
  const data = await request(getState().watchedCities.map(({ id }) => id))
  if (!data) return
  dispatch({
    type: UPDATE_LIST_WEATHER,
    payload: data.list.map((city) => ({
      id: city.id,
      temp: Math.round(city.main.temp),
    })),
  })
}
