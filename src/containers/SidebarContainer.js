import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { map } from 'lodash';
import { loadSidebar } from '../actions'


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

  renderItem = (item) => <ListGroupItem>
    {JSON.stringify(item)}
  </ListGroupItem>


  render() {
    const { sidebar } = this.props;
    if (!sidebar) {
      return <h1><i>Loading Sidebar</i></h1>
    }

    return (
        <ListGroup>
          {map(sidebar, this.renderItem)}
        </ListGroup>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
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
