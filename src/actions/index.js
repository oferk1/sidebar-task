import { CALL_API, Schemas } from '../middleware/api'

export const SIDEBAR_REQUEST = 'SIDEBAR_REQUEST'
export const SIDEBAR_SUCCESS = 'SIDEBAR_SUCCESS'
export const SIDEBAR_FAILURE = 'SIDEBAR_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchSidebar = () => ({
  [CALL_API]: {
    types: [ SIDEBAR_REQUEST, SIDEBAR_SUCCESS, SIDEBAR_FAILURE ],
    endpoint: 'sidebar',
    schema: Schemas.SIDEBAR
  }
})
// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadSidebar = () => (dispatch, getState) => {
  const sidebar = getState().sidebar;
  return dispatch(fetchSidebar())
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})
