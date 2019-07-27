import { BASE_COLOR } from '../actions/baseColor'

const initialState = null

const getBaseColor = (state = initialState, action) => {
  switch (action.type) {
    case BASE_COLOR:
      return action.baseColor
    default:
      return state
  }
}

export default getBaseColor