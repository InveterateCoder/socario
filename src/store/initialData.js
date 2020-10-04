const initialData = {
  watchedCities: JSON.parse(localStorage.getItem('watchedCities')) || [],
  selectedWeather: {},
  bg: 'none',
}

export default initialData
