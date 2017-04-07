import { CALL_API } from '../middleware/api'

export const SIDEBAR_REQUEST = 'SIDEBAR_REQUEST'
export const SIDEBAR_SUCCESS = 'SIDEBAR_SUCCESS'
export const SIDEBAR_FAILURE = 'SIDEBAR_FAILURE'

const fetchSidebar = () => ({
  [CALL_API]: {
    types: [ SIDEBAR_REQUEST, SIDEBAR_SUCCESS, SIDEBAR_FAILURE ],
    endpoint: 'sidebar',
  }
})
export const loadSidebar = () => (dispatch, getState) => {
  const sidebar = getState().sidebar;
  return dispatch(fetchSidebar())
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})

export const TOGGLE_SORT = 'SIDEBAR_SUCCESS'

// Resets the currently visible error message.
export const toggleSort = (list) => ({
    response: list,
    type: TOGGLE_SORT
})
