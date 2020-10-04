import initialData from './initialData'
import {
  ADD_CITY,
  REMOVE_CITY,
  SELECT_CITY,
  UPDATE_LIST_WEATHER,
} from './actions'

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case ADD_CITY: {
      const watchedCities = [...state.watchedCities, action.payload]
      localStorage.setItem('watchedCities', JSON.stringify(watchedCities))
      return { ...state, watchedCities }
    }
    case REMOVE_CITY: {
      const watchedCities = state.watchedCities.filter(({ id }) => id !== action.payload)
      localStorage.setItem('watchedCities', JSON.stringify(watchedCities))
      return { ...state, watchedCities }
    }
    case SELECT_CITY:
      return {
        ...state,
        selectedWeather: action.payload,
        bg: (action.payload.dt > action.payload.sunset || action.payload.dt < action.payload.sunrise) ? 'bgNight' : 'bgDay',
      }
    case UPDATE_LIST_WEATHER: {
      const watchedCities = state.watchedCities.map((city) => {
        const { temp } = action.payload.find(({ id }) => id === city.id)
        return { ...city, temp }
      })
      return { ...state, watchedCities }
    }
    default:
      return state
  }
}
