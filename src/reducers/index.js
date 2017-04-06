import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { get } from 'lodash';
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const sidebar = (state = { sidebar: {} }, action) => {
  return {data: action.response };
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

const rootReducer = combineReducers({
  sidebar,
  errorMessage,
  routing
})

export default rootReducer
