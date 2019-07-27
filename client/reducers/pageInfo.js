import { PENDING } from '../actions/pageInfo'

const initialState = true

const setPending = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return action.pageInfo.pending 
    default:
      return state
  }
}

export default setPending