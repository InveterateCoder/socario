import {
  LOAD_CITIES
} from './actions'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD_CITIES:
      return { ...state, cities: action.payload }
    default:
      return state
  }
}
