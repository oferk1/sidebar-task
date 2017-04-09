import * as ActionTypes from '../actions'
import { reduce, set } from 'lodash';
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import moment from 'moment';

const formatUnixTS = unixTS => moment.unix(unixTS).format("MMMM DD hh:mm A")

const sidebar = (state = { data: {} }, action) => {
  if (action.type !== 'SIDEBAR_SUCCESS') return state;
  reduce(action.response, (result, item) => {
	  set(item, 'updated', formatUnixTS(item.updated))
	  set(item, 'key', result.length);
	  result.push(item);
	  return result;
  }, []);
	return {total: action.response.length, data: action.response };
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
