/* eslint-disable no-alert */
const apikey = '330216f9e3042b8a57a7865c3de67865'

export const ADD_CITY = 'add_city'
export const addCity = (name, lat, lon) => async function addCityThunk(dispatch, getState) {
  try {
    const { watchedCities } = getState()
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
    if (res.status !== 200) {
      alert(`Weather request failed with ${res.statusText}`)
    } else {
      const city = await res.json()
      if (watchedCities.some(({ id }) => id === city.id)) return
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
  } catch (err) {
    alert(err.message)
  }
}

export const REMOVE_CITY = 'remove_city'
export const removeCity = (id) => ({
  type: REMOVE_CITY,
  payload: id,
})

export const SELECT_CITY = 'select_city'
export const selectCity = (id) => async function selectCityThunk(dispatch) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apikey}&units=metric`)
    if (res.status !== 200) {
      alert(`Weather request failed with ${res.statusText}`)
    } else {
      const data = await res.json()
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
  } catch (err) {
    alert(err.message)
  }
}

export const UPDATE_LIST_WEATHER = 'update_list_weather'
export const updateListWeather = () => async function updateListWeatherThunk(dispatch, getState) {
  try {
    const ids = getState().watchedCities.map(({ id }) => id).join(',')
    if (!ids) return
    const res = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${ids}&appid=${apikey}&units=metric`)
    if (res.status !== 200) {
      alert(`Weather request failed with ${res.statusText}`)
    } else {
      const data = await res.json()
      dispatch({
        type: UPDATE_LIST_WEATHER,
        payload: data.list.map((city) => ({
          id: city.id,
          temp: Math.round(city.main.temp),
        })),
      })
    }
  } catch (err) {
    alert(err.message)
  }
}