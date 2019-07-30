import { PENDING } from '../actions/pageInfo'

const initialState = {pending: true}

const setPending = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return action.pageInfo
    default:
      return state
  }
}

export default setPending