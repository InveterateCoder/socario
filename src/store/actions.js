import cities from '../assets/worldcities.csv'

export const LOAD_CITIES = 'load_cities'

export const loadCities = () => ({
  type: LOAD_CITIES,
  payload: cities,
})
