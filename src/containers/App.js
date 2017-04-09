import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../actions'
import SidebarContainer from '../components/Sidebar'


class App extends Component {

  handleDismissClick = e => {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <SidebarContainer />
        <hr />
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
})

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
