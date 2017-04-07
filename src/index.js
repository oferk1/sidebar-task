import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'bootstrap/dist/css/bootstrap.css';
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
)
