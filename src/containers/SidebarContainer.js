import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadSidebar } from '../actions'
import List from '../components/List'

const loadData = ({ loadSidebar }) => {
  loadSidebar()
}

class SidebarContainer extends Component {
  static propTypes = {
	  loadSidebar: PropTypes.func.isRequired,
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    loadData(nextProps)
  }

  renderSidebarItem(sidebarItem) {
    return JSON.stringify(sidebarItem)
  }

  render() {
    const { sidebar } = this.props;
    if (!sidebar) {
      return <h1><i>Loading Sidebar</i></h1>
    }

    return (
      <div> Sidebar container {JSON.stringify(this.props)}
        <List renderItem={this.renderSidebarItem}
              items={sidebar.items}
              />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	console.log(JSON.stringify(state),"%%%%%%%sss%%%%");

  const {
    sidebar
  } = state


  return {
	  sidebar,
  }
}

export default connect(mapStateToProps, {
  loadSidebar,
})(SidebarContainer)
