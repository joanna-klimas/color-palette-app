import { BASE_COLOR } from '../actions/baseColor'

const initialState = randomHexColor()

const getBaseColor = (state = initialState, action) => {
  switch (action.type) {
    case BASE_COLOR:
      return action.baseColor
    default:
      return state
  }
}

function randomHexColor() {
  return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
}

export default getBaseColor